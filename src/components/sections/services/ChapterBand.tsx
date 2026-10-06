import { Section } from "@/components/ui/Section";
import type { ChapterId } from "@/content/services";
import { CHAPTERS } from "@/content/services";

interface ChapterBandProps {
  readonly id: ChapterId;
  readonly range: string;
}

export function ChapterBand({ id, range }: ChapterBandProps) {
  const chapter = CHAPTERS[id];

  return (
    <Section tone="alt" className="py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex-1">
          <h2 className="type-h2 text-alt-heading mb-4">{chapter.title}</h2>
          <p className="type-lead text-alt-text max-w-xl">
            {chapter.description}
          </p>
        </div>
        <div className="shrink-0 max-w-full overflow-hidden">
          <div className="type-wordmark text-7xl md:text-9xl text-alt-heading opacity-20 whitespace-nowrap overflow-hidden text-ellipsis">
            {range}
          </div>
        </div>
      </div>
    </Section>
  );
}
