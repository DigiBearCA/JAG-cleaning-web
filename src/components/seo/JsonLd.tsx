import type { JsonLdObject } from "@/lib/structured-data";

export interface JsonLdProps {
  readonly data: JsonLdObject;
}

/** Renders structured data. "<" is escaped as \u003c so the JSON can never close the script tag. */
export function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
