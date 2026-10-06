import { CheckIcon } from "@/components/icons";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ChecklistGroup, ChecklistItem } from "@/content/types";
import { cx } from "@/lib/cx";

export interface ChecklistSectionProps {
  readonly id?: string;
  readonly eyebrow?: string;
  readonly title: string;
  readonly lead?: string;
  readonly groups: ReadonlyArray<ChecklistGroup>;
}

function ChecklistList({
  items,
  columns,
}: {
  readonly items: ReadonlyArray<ChecklistItem>;
  readonly columns: boolean;
}) {
  return (
    <ul className={cx("grid gap-4", columns && "md:grid-cols-2 md:gap-x-8")}>
      {items.map((item) => (
        <li key={item.label} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-pill bg-chip text-chip-fg"
          >
            <CheckIcon size={16} />
          </span>
          <span className="flex flex-col">
            <span
              className={cx("type-body text-ink", item.detail && "font-medium")}
            >
              {item.label}
            </span>
            {item.detail ? (
              <span className="type-body text-ink-muted">{item.detail}</span>
            ) : null}
          </span>
        </li>
      ))}
    </ul>
  );
}

/**
 * "What's included" on the alt background. Several groups render as a grid of checklist
 * cards; a single group renders as one card with its items in two columns.
 */
export function ChecklistSection({
  id = "included",
  eyebrow,
  title,
  lead,
  groups,
}: ChecklistSectionProps) {
  const headingId = `${id}-title`;
  const single = groups.length === 1;
  return (
    <Section tone="alt" id={id} labelledBy={headingId}>
      <SectionHeading
        id={headingId}
        eyebrow={eyebrow}
        title={title}
        lead={lead}
        tone="alt"
      />
      <div className={cx("mt-10 grid gap-4", !single && "md:grid-cols-2")}>
        {groups.map((group, index) => (
          <Card
            key={group.title ?? `group-${index}`}
            className="flex flex-col gap-5"
          >
            {group.title ? (
              <h3 className="type-h3 text-primary">{group.title}</h3>
            ) : null}
            <ChecklistList items={group.items} columns={single} />
          </Card>
        ))}
      </div>
    </Section>
  );
}
