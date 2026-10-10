"use client";

import { Icon } from "@/components/icons";
import { getEnabledServices, getServiceNumber } from "@/content/services";

export function JobIndex() {
  const services = getEnabledServices();

  const handleServiceClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    slug: string,
  ) => {
    e.preventDefault();
    const target = document.getElementById(slug);

    if (target) {
      // 1. Smoothly scroll down to that service card
      target.scrollIntoView({ behavior: "smooth", block: "center" });

      // 2. Briefly highlight the target card to draw the user's focus
      target.classList.add("ring-2", "ring-primary", "ring-offset-2");
      setTimeout(() => {
        target.classList.remove("ring-2", "ring-primary", "ring-offset-2");
      }, 1500);

      // 3. After the scroll completes, open the service ticket dialog
      setTimeout(() => {
        window.history.pushState({ service: slug }, "", `#${slug}`);
        window.dispatchEvent(new Event("hashchange"));
      }, 450);
    } else {
      window.history.pushState({ service: slug }, "", `#${slug}`);
      window.dispatchEvent(new Event("hashchange"));
    }
  };

  return (
    <div className="relative rounded-panel bg-alt p-4 md:p-6 flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {services.map((service) => (
          <a
            key={service.slug}
            href={`#${service.slug}`}
            onClick={(e) => handleServiceClick(e, service.slug)}
            className="group flex items-center justify-between rounded-card bg-bg p-4 transition duration-150 ease-brand hover:scale-[1.02] shadow-sm hover:shadow-md cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <span className="type-small text-ink-muted font-medium w-6">
                {getServiceNumber(service)}
              </span>
              <span className="type-button text-ink transition-colors">
                {service.name}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name={service.icon} className="text-ink-muted w-5 h-5" />
              <Icon
                name="arrowRight"
                className="text-primary w-4 h-4 transition-transform group-hover:translate-x-1"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
