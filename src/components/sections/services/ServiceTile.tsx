"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactNode } from "react";
import { Icon } from "@/components/icons";
import type { ImageSlot } from "@/config/images";
import type { Service } from "@/content/services";
import { useServiceHash } from "./useServiceHash";

export interface ServiceTileProps {
  readonly service: Service;
  readonly number: string;
  readonly imageSlot: ImageSlot;
  readonly spanClasses: string;
  readonly children: ReactNode;
}

/**
 * Client component owning the card container query layout, hover transitions,
 * and the native <dialog> overlay state with hash synchronization.
 */
export function ServiceTile({
  service,
  number,
  imageSlot,
  spanClasses,
  children,
}: ServiceTileProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { isOpen, openDialog, closeDialog } = useServiceHash(service.slug);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  function handleDialogClick(e: React.MouseEvent<HTMLDialogElement>) {
    // Backdrop click: e.target is the dialog element itself
    if (e.target === dialogRef.current) {
      closeDialog();
      return;
    }
    const target = e.target as HTMLElement;
    if (target.closest("[data-close-dialog]")) {
      closeDialog();
      return;
    }
    if (target.closest("a[data-quote-service]")) {
      closeDialog();
    }
  }

  return (
    <article
      id={service.slug}
      className={`group relative bg-white rounded-card border border-line overflow-hidden @container transition duration-300 ease-brand hover:border-primary hover:-translate-y-0.5 has-focus-visible:outline-2 has-focus-visible:outline-primary has-focus-visible:outline-offset-2 ${spanClasses}`}
    >
      {/* Container query layout: stacked on narrow cards (<448px), horizontal on wide cards (>=448px) */}
      <div className="flex flex-col @md:flex-row gap-4 @md:gap-6 p-4 @md:p-6 h-full">
        {/* Service photo frame */}
        <div className="relative overflow-hidden rounded-menu shrink-0 aspect-[4/3] @xs:aspect-[16/10] @md:aspect-auto @md:w-[45%] @md:min-h-48">
          <Image
            src={imageSlot.src}
            alt={imageSlot.alt}
            fill
            sizes="(min-width: 768px) 560px, 50vw"
            className="object-cover transition-transform duration-300 ease-brand group-hover:scale-[1.04]"
          />
          <span className="absolute top-2.5 left-2.5 rounded-pill bg-chip text-chip-fg px-2.5 py-0.5 type-caption font-medium shadow-xs pointer-events-none select-none">
            {number}
          </span>
        </div>

        {/* Card text content */}
        <div className="flex flex-col justify-between @md:justify-center flex-1 min-w-0">
          <div>
            <h3 className="type-h3 text-primary">{service.name}</h3>
            <p className="type-small text-ink-muted mt-1 leading-snug">
              {service.tagline}
            </p>
          </div>

          <div className="mt-4 pt-1">
            <button
              type="button"
              aria-haspopup="dialog"
              aria-label={`Learn more about ${service.name}`}
              onClick={openDialog}
              className="inline-flex h-10 items-center gap-2 rounded-pill border border-primary px-5 type-button text-primary transition duration-150 ease-brand after:absolute after:inset-0 after:content-[''] focus:outline-hidden cursor-pointer"
            >
              <span>Learn more</span>
              <Icon
                name="arrowRight"
                size={16}
                className="transition-transform duration-150 ease-brand group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Ticket Modal Dialog */}
      <dialog
        ref={dialogRef}
        id={`${service.slug}-dialog`}
        aria-labelledby={`${service.slug}-ticket-title`}
        aria-describedby={`${service.slug}-ticket-desc`}
        onClick={handleDialogClick}
        onCancel={(e) => {
          e.preventDefault();
          closeDialog();
        }}
        className="m-auto w-[calc(100vw-1.5rem)] max-w-[960px] max-h-[calc(100dvh-1.5rem)] md:max-h-[calc(100dvh-3rem)] rounded-panel bg-white text-ink shadow-float overflow-y-auto p-0 border-0 outline-hidden relative"
      >
        {/* Round 44px close button is first focusable element */}
        <button
          type="button"
          onClick={closeDialog}
          aria-label={`Close ${service.name} details`}
          className="absolute top-2.5 right-2.5 md:top-3.5 md:right-3.5 z-20 flex size-11 items-center justify-center rounded-pill bg-bg/90 text-ink hover:bg-bg transition duration-150 ease-brand cursor-pointer shadow-xs focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
        >
          <Icon name="close" size={20} />
        </button>

        {children}
      </dialog>
    </article>
  );
}

