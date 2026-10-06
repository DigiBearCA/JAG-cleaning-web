import { Button } from "@/components/ui/Button";
import { QUOTE_HREF } from "@/content/navigation";
import { telHref, whatsappHref } from "@/lib/contact-links";

/**
 * Mobile-only contact bar fixed to the bottom (hidden from 768px). Square top edge.
 * The body reserves matching bottom padding so it never covers content, and globals.css
 * hides it while the mobile menu is open ([data-sticky-bar]).
 */
export function StickyContactBar() {
  return (
    <nav
      aria-label="Quick contact"
      data-sticky-bar=""
      className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-line bg-transparent px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:hidden"
    >
      <Button
        href={telHref()}
        variant="outline"
        size="bar"
        icon="phone"
        className="bg-bg"
      >
        Call
      </Button>
      <Button
        href={whatsappHref()}
        variant="outline"
        size="bar"
        icon="whatsapp"
        className="bg-bg"
      >
        WhatsApp
      </Button>
      <Button href={QUOTE_HREF} size="bar">
        Get a Quote
      </Button>
    </nav>
  );
}
