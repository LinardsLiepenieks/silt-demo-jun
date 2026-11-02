import { useEffect, useRef, useState, type PointerEvent } from 'react';
import type { NavEntry, NavMenuItem } from '../content/navigation';
import { ChevronDownIcon } from './chevron-down-icon';

// Hover timings from the live site's Radix navigation menu: a short delay
// before the first open, instant switching while a menu was just open, and a
// grace period when the pointer leaves a trigger for its panel.
const OPEN_DELAY_MS = 50;
const CLOSE_DELAY_MS = 150;
const SKIP_DELAY_MS = 300;

const itemClass =
  'group inline-flex h-9 items-center justify-center rounded-md py-2 text-sm font-medium whitespace-nowrap text-foreground outline-none transition-[color,box-shadow] hover:text-black focus-visible:ring-[3px] focus-visible:ring-neutral-400/50';

const isMouse = (event: PointerEvent) => event.pointerType === 'mouse';

export function NavMenu({ entries }: { entries: NavEntry[] }) {
  const [open, setOpen] = useState('');
  const navRef = useRef<HTMLElement>(null);
  const openTimer = useRef(0);
  const closeTimer = useRef(0);
  const skipTimer = useRef(0);
  const skipDelay = useRef(false);
  // A menu closed by clicking its trigger stays closed until the pointer leaves.
  const clickClosed = useRef('');

  useEffect(() => {
    window.clearTimeout(skipTimer.current);
    if (open) skipDelay.current = true;
    else
      skipTimer.current = window.setTimeout(
        () => (skipDelay.current = false),
        SKIP_DELAY_MS,
      );
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen('');
    };
    const onPointerDown = (event: globalThis.PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpen('');
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  useEffect(
    () => () => {
      window.clearTimeout(openTimer.current);
      window.clearTimeout(closeTimer.current);
      window.clearTimeout(skipTimer.current);
    },
    [],
  );

  const clearTimers = () => {
    window.clearTimeout(openTimer.current);
    window.clearTimeout(closeTimer.current);
  };

  const enterTrigger = (label: string) => {
    if (clickClosed.current === label) return;
    clearTimers();
    if (skipDelay.current) setOpen(label);
    else
      openTimer.current = window.setTimeout(
        () => setOpen(label),
        OPEN_DELAY_MS,
      );
  };

  const scheduleClose = () => {
    clearTimers();
    closeTimer.current = window.setTimeout(() => setOpen(''), CLOSE_DELAY_MS);
  };

  const toggle = (label: string) => {
    clearTimers();
    clickClosed.current = open === label ? label : '';
    setOpen(open === label ? '' : label);
  };

  return (
    <nav
      ref={navRef}
      aria-label="Main"
      className="relative flex max-w-max flex-1 items-center justify-center"
    >
      <ul className="flex flex-1 list-none items-center justify-center gap-2">
        {entries.map((entry) => {
          if (entry.kind === 'link') {
            return (
              <li key={entry.label} className="relative">
                <a
                  href={entry.href}
                  className={`${itemClass} ${entry.className}`}
                >
                  {entry.label}
                </a>
              </li>
            );
          }
          const isOpen = open === entry.label;
          const contentId = `nav-menu-${entry.label.toLowerCase()}`;
          return (
            <li key={entry.label} className="relative">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={contentId}
                data-state={isOpen ? 'open' : 'closed'}
                className={`${itemClass} w-28 px-2`}
                onPointerMove={(event) => {
                  if (isMouse(event) && open !== entry.label)
                    enterTrigger(entry.label);
                  else if (isMouse(event)) clearTimers();
                }}
                onPointerLeave={(event) => {
                  if (!isMouse(event)) return;
                  clickClosed.current = '';
                  window.clearTimeout(openTimer.current);
                  if (open) scheduleClose();
                }}
                onClick={() => toggle(entry.label)}
              >
                {entry.label}{' '}
                <ChevronDownIcon
                  className={`relative top-px ml-1 size-4 transition duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {/* Always mounted so opening and closing are CSS transitions,
                  which reverse smoothly when interrupted mid-way. */}
              <div
                id={contentId}
                data-state={isOpen ? 'open' : 'closed'}
                className={`absolute top-full left-0 mt-1.5 overflow-hidden rounded-md border border-border bg-white p-2 pr-2.5 text-foreground shadow-sm transition-[opacity,scale,visibility] duration-200 ${
                  isOpen
                    ? 'visible scale-100 opacity-100'
                    : 'pointer-events-none invisible scale-95 opacity-0'
                }`}
                onPointerEnter={(event) => isMouse(event) && clearTimers()}
                onPointerLeave={(event) => isMouse(event) && scheduleClose()}
              >
                <ul className={entry.listClassName}>
                  {entry.items.map((item) => (
                    <NavMenuLink key={item.title} item={item} />
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function NavMenuLink({ item }: { item: NavMenuItem }) {
  return (
    <li>
      <a
        href={item.href}
        className="relative flex flex-col gap-1 rounded-lg border border-transparent px-3 py-1 text-sm outline-none transition-colors hover:border-border/50 hover:bg-neutral-100/50 focus-visible:ring-[3px] focus-visible:ring-neutral-400/50"
      >
        <div className="mb-1 text-sm leading-tight font-semibold">
          {item.title}
        </div>
        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {item.description}
        </p>
        {item.isExternal && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute top-3 right-2 h-4 w-4 text-muted-foreground"
            aria-hidden="true"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        )}
      </a>
    </li>
  );
}
