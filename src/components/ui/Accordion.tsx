"use client";

import { useId, useState } from "react";
import { MinusIcon, PlusIcon } from "@/components/icons";
import { cx } from "@/lib/cx";

export interface AccordionItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export interface AccordionProps {
  readonly items: ReadonlyArray<AccordionItem>;
  /** Heading level wrapping each question button. */
  readonly headingLevel?: "h3" | "h4";
  readonly className?: string;
}

/**
 * FAQ accordion. Each row is a white card; the first item starts open.
 * Panels animate open with the grid-rows technique (0fr to 1fr over 250ms). Collapsed panels
 * are inert so hidden text is skipped by keyboard and screen readers, but stays in the HTML.
 */
export function Accordion({
  items,
  headingLevel = "h3",
  className,
}: AccordionProps) {
  const baseId = useId();
  const firstId = items[0]?.id;
  const [openId, setOpenId] = useState<string | null>(firstId ?? null);
  const Heading = headingLevel;

  function toggle(id: string) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <div className={cx("flex flex-col gap-4", className)}>
      {items.map((item) => {
        const open = openId === item.id;
        const buttonId = `${baseId}-${item.id}-button`;
        const panelId = `${baseId}-${item.id}-panel`;
        return (
          <div
            key={item.id}
            className={cx(
              "rounded-card border border-line text-ink transition-colors duration-150 ease-brand",
              open ? "bg-alt" : "bg-snow"
            )}
          >
            <Heading className="m-0">
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 rounded-card px-6 py-4 text-left type-button text-ink transition duration-150 ease-brand hover:text-primary"
              >
                <span>{item.question}</span>
                <span className="inline-flex size-6 shrink-0 items-center justify-center text-primary">
                  {open ? <MinusIcon size={20} /> : <PlusIcon size={20} />}
                </span>
              </button>
            </Heading>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!open}
              className={cx(
                "grid transition-[grid-template-rows] duration-250 ease-brand",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-prose px-6 pb-6 type-body text-ink">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
