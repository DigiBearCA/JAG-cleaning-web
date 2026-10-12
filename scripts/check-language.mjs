import fs from "node:fs";
import path from "node:path";

// Banned words list as specified in COMMERCIAL_REPOSITION_PROMPT.md:
// home, homes, homeowner, homeowners, house, houses, household, households, domestic, home page, homepage.
// Case-insensitive with word boundaries.
const BANNED_REGEX = /\b(home|homes|homeowner|homeowners|house|houses|household|households|domestic|home[- ]page|homepage)\b/gi;

function getHtmlFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of list) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      results.push(fullPath);
    }
  }
  return results;
}

function stripTags(html) {
  return html.replace(/<[^>]*>/g, " ");
}

function scanFile(filePath) {
  const rawHtml = fs.readFileSync(filePath, "utf8");
  const hits = [];

  // Allowed pattern: a link to "/" whose visible text is "Home"
  // Match <a ... href="/" ...>...</a> or <a ... href='/' ...>...</a>
  const htmlWithAllowedMasked = rawHtml.replace(
    /<a\b([^>]*href=["']\/["'][^>]*)>([\s\S]*?)<\/a>/gi,
    (match, attrs, innerHtml) => {
      const visibleText = stripTags(innerHtml).replace(/\s+/g, " ").trim();
      if (visibleText.toLowerCase() === "home") {
        return `<!-- ALLOWED_HOME_LINK: ${visibleText} -->`;
      }
      return match;
    }
  );

  // 1. Scan attribute values before stripping tags: alt, aria-label, title, content (meta)
  // We remove scripts and styles first so we don't scan attributes inside scripts/styles
  const cleanHtml = htmlWithAllowedMasked
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ");

  const attrRegex = /\b(alt|aria-label|title|content)\s*=\s*(?:"([^"]*)"|'([^']*)')/gi;
  let attrMatch;
  while ((attrMatch = attrRegex.exec(cleanHtml)) !== null) {
    const attrName = attrMatch[1];
    const attrVal = attrMatch[2] ?? attrMatch[3] ?? "";
    let match;
    const re = new RegExp(BANNED_REGEX.source, BANNED_REGEX.flags);
    while ((match = re.exec(attrVal)) !== null) {
      const start = Math.max(0, match.index - 25);
      const end = Math.min(attrVal.length, match.index + match[0].length + 25);
      const snippet = attrVal.slice(start, end).replace(/\s+/g, " ");
      hits.push({
        file: filePath,
        type: `attribute [${attrName}]`,
        word: match[0],
        snippet: `...${snippet}...`,
      });
    }
  }

  // 2. Scan visible text (HTML tags stripped)
  // Replace tags with space, decode basic entities if any
  const textContent = stripTags(cleanHtml).replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
  let textMatch;
  const re = new RegExp(BANNED_REGEX.source, BANNED_REGEX.flags);
  while ((textMatch = re.exec(textContent)) !== null) {
    const start = Math.max(0, textMatch.index - 30);
    const end = Math.min(textContent.length, textMatch.index + textMatch[0].length + 30);
    const snippet = textContent.slice(start, end).replace(/\s+/g, " ").trim();
    hits.push({
      file: filePath,
      type: "visible text",
      word: textMatch[0],
      snippet: `...${snippet}...`,
    });
  }

  return hits;
}

function main() {
  const appDir = path.resolve(".next/server/app");
  if (!fs.existsSync(appDir)) {
    console.error(`Error: Prerendered HTML directory ${appDir} does not exist. Run "npm run build" first.`);
    process.exit(1);
  }

  const htmlFiles = getHtmlFiles(appDir);
  if (htmlFiles.length === 0) {
    console.error(`No HTML files found in ${appDir}`);
    process.exit(1);
  }

  console.log(`Checking ${htmlFiles.length} HTML files in ${appDir}...`);
  let totalHits = 0;
  const allHits = [];

  for (const file of htmlFiles) {
    const fileHits = scanFile(file);
    if (fileHits.length > 0) {
      allHits.push(...fileHits);
      totalHits += fileHits.length;
    }
  }

  if (totalHits > 0) {
    console.log(`\n❌ Found ${totalHits} language policy violation(s):\n`);
    for (const hit of allHits) {
      const relFile = path.relative(process.cwd(), hit.file);
      console.log(`[${hit.word}] in ${hit.type} (${relFile}):`);
      console.log(`   ${hit.snippet}`);
    }
    process.exit(1);
  } else {
    console.log(`\n✅ Language check passed: 0 banned words found in prerendered HTML (allowed "Home" nav/footer link preserved).`);
    process.exit(0);
  }
}

main();

