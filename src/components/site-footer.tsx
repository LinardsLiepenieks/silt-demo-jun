import type { ReactNode } from 'react';
import {
  complianceLink,
  copyright,
  footerColumns,
  g2Badges,
  legalLinks,
  socialLinks,
  type FooterColumn,
} from '../content/footer';
import { ChevronDownIcon } from './chevron-down-icon';
import { WindmillWordmark } from './windmill-logo';

// The same wash as the top of the page, fading up from the bottom edge.
const bottomGlowStyle = {
  background:
    'linear-gradient(to right, #ffaedcc1 0%, #ffc37e98 25%, #6185f05c 50%)',
  maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
  maskRepeat: 'no-repeat',
  maskSize: '100% 100%',
};

const linkClass =
  'block py-1 underline-offset-4 transition-colors hover:text-black hover:underline';

function TablerIcon({
  children,
  className = 'h-6 w-6',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function SocialLinks() {
  const icons = [
    {
      ...socialLinks.x,
      icon: (
        <path d="m4 4l11.733 16H20L8.267 4zm0 16l6.768-6.768m2.46-2.46L20 4" />
      ),
    },
    {
      ...socialLinks.linkedIn,
      icon: (
        <>
          <path d="M8 11v5m0-8v.01M12 16v-5m4 5v-3a2 2 0 1 0-4 0" />
          <path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
        </>
      ),
    },
    {
      ...socialLinks.youTube,
      icon: (
        <>
          <path d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" />
          <path d="m10 9l5 3l-5 3z" />
        </>
      ),
    },
  ];
  return (
    <div className="flex flex-row items-center gap-4 pl-1">
      {icons.map(({ href, label, icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="-m-2 p-2"
          aria-label={label}
        >
          <TablerIcon>{icon}</TablerIcon>
        </a>
      ))}
    </div>
  );
}

function G2Badges() {
  const { usersLoveUs, stars } = g2Badges;
  return (
    <div className="flex items-center gap-3 pl-1 xl:col-span-2 xl:col-start-4 xl:row-start-2 xl:gap-6 xl:self-center xl:pl-0">
      <a
        href={usersLoveUs.href}
        title={usersLoveUs.title}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0"
      >
        <img
          src={usersLoveUs.src}
          alt={usersLoveUs.alt}
          width={92}
          height={107}
          loading="lazy"
          decoding="async"
          className="h-auto w-16 xl:w-23"
        />
      </a>
      <a
        href={stars.href}
        title={stars.title}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0"
      >
        <img
          src={stars.src}
          alt={stars.alt}
          width={400}
          height={200}
          loading="lazy"
          decoding="async"
          className="h-auto w-[120px] max-w-[200px] xl:w-44"
        />
      </a>
    </div>
  );
}

function ColumnLinks({ column }: { column: FooterColumn }) {
  return column.links.map((link) => (
    <a key={link.label} href={link.href} className={linkClass}>
      {link.label}
    </a>
  ));
}

// Below lg each column folds into a native <details> accordion.
function FooterAccordion({ column }: { column: FooterColumn }) {
  return (
    <details className="group">
      <summary className="-mx-3 flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-3 font-medium transition-colors hover:bg-white/50 [&::-webkit-details-marker]:hidden">
        <span className="text-sm font-medium text-muted-foreground">
          {column.title}
        </span>
        <ChevronDownIcon className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" />
      </summary>
      <div className="mt-2 space-y-3 pl-3">
        <ColumnLinks column={column} />
      </div>
    </details>
  );
}

function FooterLinkColumn({ column }: { column: FooterColumn }) {
  return (
    <div className={`space-y-4 ${column.tall ? 'xl:row-span-2' : ''}`}>
      <div className="text-sm font-medium text-muted-foreground">
        {column.title}
      </div>
      <div className="space-y-3">
        <ColumnLinks column={column} />
      </div>
    </div>
  );
}

function LegalRow() {
  return (
    <div className="mt-24 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
      <div className="flex flex-col gap-8 text-sm text-neutral-900 md:flex-row">
        {legalLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.newTab ? '_blank' : undefined}
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
        <a
          href={complianceLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
        >
          <TablerIcon className="h-4 w-4">
            <path d="M12 3a12 12 0 0 0 8.5 3A12 12 0 0 1 12 21A12 12 0 0 1 3.5 6A12 12 0 0 0 12 3" />
            <path d="M11 11a1 1 0 1 0 2 0a1 1 0 1 0-2 0m1 1v2.5" />
          </TablerIcon>
          {complianceLink.label}
        </a>
      </div>
      <p className="text-sm text-neutral-900">{copyright}</p>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative rounded-t-4xl bg-white px-6 pb-12 md:px-12 xl:px-24 2xl:px-72">
      <div
        className="pointer-events-none absolute right-0 bottom-0 left-0 z-1 hidden h-100 lg:block"
        style={bottomGlowStyle}
      />
      <div className="container mt-12 pt-22 md:mt-24 lg:mt-36">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 lg:gap-12 xl:grid-cols-5 xl:grid-rows-[auto_1fr]">
          <div className="flex flex-col gap-4 xl:contents">
            <div className="space-y-4 xl:row-span-2">
              <WindmillWordmark className="h-10 w-auto text-black" />
              <SocialLinks />
            </div>
            <G2Badges />
          </div>
          <div className="space-y-4 lg:hidden">
            {footerColumns.map((column) => (
              <FooterAccordion key={column.title} column={column} />
            ))}
          </div>
          <div className="hidden grid-cols-1 gap-8 sm:grid-cols-2 lg:grid lg:grid-cols-2 lg:gap-12 xl:contents">
            {footerColumns.map((column) => (
              <FooterLinkColumn key={column.title} column={column} />
            ))}
          </div>
        </div>
        <div className="mt-12">
          <LegalRow />
        </div>
      </div>
    </footer>
  );
}
