import type { SVGProps } from "react";
import { HomeArt } from "./HomeArt";
import { ApartmentArt } from "./ApartmentArt";
import { OfficeArt } from "./OfficeArt";
import { ManagerArt } from "./ManagerArt";
import { BuildArt } from "./BuildArt";
import { WinterArt } from "./WinterArt";

export type AudienceArtId =
  | "home"
  | "apartment"
  | "office"
  | "manager"
  | "build"
  | "winter";

interface Props extends SVGProps<SVGSVGElement> {
  readonly art: AudienceArtId;
}

export function AudienceArt({ art, ...props }: Props) {
  switch (art) {
    case "home":
      return <HomeArt {...props} />;
    case "apartment":
      return <ApartmentArt {...props} />;
    case "office":
      return <OfficeArt {...props} />;
    case "manager":
      return <ManagerArt {...props} />;
    case "build":
      return <BuildArt {...props} />;
    case "winter":
      return <WinterArt {...props} />;
  }
}

