import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { NavEntry } from '../content/navigation';
import { ChevronDownIcon } from './chevron-down-icon';

// The hamburger and the full-screen menu below the mobile top bar. The panel
// is portaled to <body> because the bar's backdrop blur would otherwise
// become the containing block for its fixed positioning.
export function MobileNav({ entries }: { entries: NavEntry[] }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && close();
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        !panelRef.current?.contains(target) &&
        !buttonRef.current?.contains(target)
      )
        close();
    };
    const desktop = window.matchMedia('(min-width: 64rem)');
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointerDown);
    desktop.addEventListener('change', close);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointerDown);
      desktop.removeEventListener('change', close);
    };
  }, [open]);

  const bar =
    'block h-0.5 w-4 rounded-full bg-current transition-transform duration-200 origin-center';

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        className="relative inline-flex h-10 w-10 flex-col items-center justify-center rounded-md p-2 hover:bg-neutral-100 focus:outline-none"
        onClick={() => setOpen((value) => !value)}
      >
        <span
          className={`${bar} ${open ? 'translate-y-0.5 rotate-45' : '-translate-y-1'}`}
        />
        <span className={`${bar} ${open ? '-rotate-45' : 'translate-y-1'}`} />
      </button>
      {createPortal(
        <div
          ref={panelRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className={`fixed inset-x-0 top-14 bottom-0 z-40 flex flex-col bg-background/80 p-6 backdrop-blur-2xl transition-[opacity,visibility] duration-150 lg:hidden ${
            open ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
        >
          <nav className="flex-1 overflow-y-auto">
            <ul className="flex flex-col gap-2">
              {entries.map((entry) =>
                entry.kind === 'link' ? (
                  <li key={entry.label}>
                    <a href={entry.href} className="block py-1 font-medium">
                      {entry.label}
                    </a>
                  </li>
                ) : (
                  <li key={entry.label}>
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between py-1 font-medium [&::-webkit-details-marker]:hidden">
                        <span>{entry.label}</span>
                        <ChevronDownIcon className="size-4 transition-transform group-open:rotate-180" />
                      </summary>
                      <ul className="mt-2 flex flex-col gap-2 pl-4">
                        {entry.items.map((item) => (
                          <li key={item.title}>
                            <a href={item.href}>{item.title}</a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>,
        document.body,
      )}
    </>
  );
}
