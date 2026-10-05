import { SceneFrame } from "./SceneFrame";

export function CarpetCleaningScene() {
  return (
    <SceneFrame>
      <path d="M0 250H400V300H0V250Z" className="fill-illus-ground" />
      <rect x="150" y="150" width="100" height="100" rx="12" className="fill-illus-body" />
      <circle cx="200" cy="120" r="40" className="fill-illus-detail" />
    </SceneFrame>
  );
}
