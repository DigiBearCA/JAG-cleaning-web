import Link from "next/link";
import { Icon } from "@/components/icons";
import { getEnabledServices, getServiceNumber } from "@/content/services";

export function JobIndex() {
  const services = getEnabledServices();

  return (
    <div className="relative rounded-panel bg-alt p-6 md:p-8 flex flex-col">
      {/* <h2 className="type-eyebrow text-alt-heading mb-6">Service Index</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`#${service.slug}`}
            className="group flex items-center justify-between rounded-card bg-bg p-4 transition duration-150 ease-brand hover:scale-[1.02] shadow-sm hover:shadow-md"
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
          </Link>
        ))}
      </div>
    </div>
  );
}
