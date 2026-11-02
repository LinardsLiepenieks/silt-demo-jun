import { whereWork } from '../content/hero';
import { ArrowRightIcon } from './arrow-right-icon';

/** A dimmed office photo banner with the tagline and a glass link. */
export function WhereWork() {
  return (
    <div className="bg-gradient-to-b from-white to-[#E8F6FA]">
      <div className="mx-auto max-w-[1600px] px-6 pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="relative flex flex-col items-center justify-center gap-10 overflow-hidden rounded-[32px] py-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            <img
              src={whereWork.image}
              alt=""
              loading="lazy"
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/35" />
          </div>
          <h2 className="relative max-w-[680px] px-6 text-center font-display text-4xl leading-[1.05] font-medium tracking-[-0.02em] text-white sm:text-5xl md:text-6xl lg:text-[68px]">
            {whereWork.title}
          </h2>
          <a
            href={whereWork.cta.href}
            className="glass-ring relative flex h-[52px] shrink-0 items-center justify-center gap-2 rounded-[100px] bg-white/20 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/30"
          >
            {whereWork.cta.label}
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
