import { HomeScene } from "@/components/illustrations/HomeScene";
import {
  IllustrationFrame,
  type IllustrationImage,
} from "@/components/illustrations/IllustrationFrame";
import { OfficeScene } from "@/components/illustrations/OfficeScene";
import { SnowScene } from "@/components/illustrations/SnowScene";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Section } from "@/components/ui/Section";
import { QUOTE_ANCHOR } from "@/content/navigation";
import type { SceneName } from "@/content/types";
import { telHref } from "@/lib/contact-links";
import { cx } from "@/lib/cx";

export interface PageHeroProps {
  readonly eyebrow: string;
  readonly title: string;
  readonly lead: string;
  readonly scene?: SceneName;
  readonly sceneLabel?: string;
  readonly image?: IllustrationImage;
  /** Show the Get a Free Quote (#quote) and Call us buttons. */
  readonly showActions?: boolean;
}

function Scene({
  scene,
  label,
}: {
  readonly scene: SceneName;
  readonly label?: string;
}) {
  switch (scene) {
    case "home":
      return <HomeScene label={label} />;
    case "office":
      return <OfficeScene label={label} />;
    case "snow":
      return <SnowScene label={label} />;
  }
}

/** Inner-page hero: eyebrow chip, H1, lead, actions, and an optional scene illustration. */
export function PageHero({
  eyebrow,
  title,
  lead,
  scene,
  sceneLabel,
  image,
  showActions = true,
}: PageHeroProps) {
  const hasVisual = scene !== undefined || image !== undefined;
  return (
    <Section
      labelledBy="page-title"
      containerClassName={cx(
        "grid items-center gap-10",
        hasVisual && "md:grid-cols-2 md:gap-12",
      )}
    >
      <div className="flex animate-fade-up flex-col items-start gap-4">
        <Chip>{eyebrow}</Chip>
        <div className="flex flex-col gap-4">
          <h1 id="page-title" className="type-h1 text-primary">
            {title}
          </h1>
          <p className="max-w-prose type-lead text-ink-muted">{lead}</p>
        </div>
        {showActions ? (
          <div className="flex flex-wrap gap-3">
            <Button href={QUOTE_ANCHOR}>Get a Free Quote</Button>
            <Button href={telHref()} variant="outline" icon="phone">
              Call us
            </Button>
          </div>
        ) : null}
      </div>

      {hasVisual ? (
        <div className="animate-fade-up [animation-delay:60ms]">
          <IllustrationFrame aspect="scene" image={image} priority>
            {scene ? <Scene scene={scene} label={sceneLabel} /> : null}
          </IllustrationFrame>
        </div>
      ) : null}
    </Section>
  );
}
