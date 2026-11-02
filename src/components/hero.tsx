import { useRef } from 'react';
import { hero, heroLayerIntervalMs, heroLayers } from '../content/hero';
import { useSlideshow } from '../lib/use-slideshow';
import { ArrowRightIcon } from './arrow-right-icon';
import { SlideshowSteps } from './slideshow-steps';

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="relative z-10 h-[18px] w-[18px]"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm12-4v4M8 3v4m-4 4h16m-9 4h1m0 0v3"
      />
    </svg>
  );
}

const ctaBase =
  'relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg px-7 py-3.5 text-base font-medium transition-all duration-300 ease-out active:scale-[0.97] sm:w-auto';

/**
 * The opening section: headline, two calls to action and the four product
 * layers that take turns on the right.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto pt-8 pb-12 md:pt-10 md:pb-24 lg:py-18">
        <div className="relative mx-auto grid max-w-[1665px] grid-cols-1 items-center gap-10 px-6 md:px-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-12 lg:px-16 hero:grid-cols-[minmax(0,1fr)_minmax(0,540px)] hero:gap-24 hero:pr-36 hero:pl-44">
          <div className="flex flex-col items-center gap-8 lg:items-start">
            <div className="flex flex-col items-center gap-4 lg:items-start">
              <Announcement />
              <h1 className="max-w-[680px] text-center font-display text-5xl leading-[1.05] font-medium tracking-[-0.02em] text-black lg:text-left lg:text-6xl hero:text-[80px] hero:leading-[72px]">
                {hero.title} <i>{hero.emphasis}</i>.
              </h1>
            </div>
            <p className="max-w-[522px] text-center text-lg leading-snug text-black/60 sm:text-xl lg:text-left">
              {hero.text}
            </p>
            <div className="flex w-full flex-col items-center gap-2 lg:items-start">
              <div className="relative flex w-full max-w-md flex-col items-start justify-start gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
                <PrimaryCta />
                <a
                  href={hero.secondaryCta.href}
                  className={`group/secondary ${ctaBase} bg-white/60 text-gray-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-gray-300/70 backdrop-blur-sm hover:bg-white/90 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:ring-gray-400/80`}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-0 transition-opacity duration-300 group-hover/secondary:opacity-100" />
                  <CalendarIcon />
                  <span className="relative z-10">
                    {hero.secondaryCta.label}
                  </span>
                </a>
              </div>
            </div>
          </div>
          <LayerSlideshow />
        </div>
      </div>
    </section>
  );
}

function Announcement() {
  const { badge, label, href } = hero.announcement;
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 rounded-2xl bg-[#E9F3FB] py-1 pr-3 pl-1 transition-colors hover:bg-[#dbebf7]"
    >
      <span className="inline-flex items-center rounded-2xl bg-white px-2.5 py-0.5 text-xs leading-5 font-medium text-[#135B95]">
        {badge}
      </span>
      <span className="text-xs leading-5 font-medium text-[#135B95]">
        {label}
      </span>
      <ArrowRightIcon className="h-4 w-4 text-[#135B95] transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}

// A black button framed by a slowly turning rainbow ring, which blooms into
// a soft glow and sweeps a shimmer across on hover.
function PrimaryCta() {
  return (
    <div className="group/primary relative w-full sm:w-auto">
      <div className="fancy-glow absolute -inset-1 -z-10 rounded-lg opacity-0 blur-md transition-opacity duration-500 group-hover/primary:opacity-80" />
      <div className="fancy-glow absolute -inset-px -z-10 rounded-lg opacity-60 transition-opacity duration-300 group-hover/primary:opacity-80" />
      <a
        href={hero.primaryCta.href}
        className={`${ctaBase} bg-gradient-to-b from-[#2A2A2A] to-[#000000] text-white shadow-[inset_0_2px_0_0_rgba(255,255,255,0.15)] hover:from-[#333333] hover:to-[#111111]`}
      >
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-1000 ease-out group-hover/primary:translate-x-full" />
        <span className="relative z-10">{hero.primaryCta.label}</span>
        <ArrowRightIcon className="relative z-10 h-4 w-4" />
      </a>
    </div>
  );
}

// Each layer image carries its own iridescent panel. One shows at a time and
// they cross-fade as the steps advance.
function LayerSlideshow() {
  const root = useRef<HTMLDivElement>(null);
  const { active, select, animating, cycle } = useSlideshow(
    root,
    heroLayers.length,
    heroLayerIntervalMs,
  );
  return (
    <div
      ref={root}
      className="relative mx-auto aspect-[1472/1672] w-full max-w-[600px] lg:mr-0 lg:ml-auto"
    >
      {heroLayers.map((layer, index) => {
        const isActive = index === active;
        return (
          <div
            key={layer.label}
            aria-hidden={!isActive}
            className={`absolute inset-0 overflow-hidden rounded-[48px] transition-opacity duration-400 ease-[ease] motion-reduce:transition-none ${
              isActive ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            <img
              src={layer.image}
              alt={`Hero Layer ${layer.label}`}
              width={1472}
              height={1672}
              draggable={false}
              className="h-full w-full object-cover"
            />
          </div>
        );
      })}
      <SlideshowSteps
        labels={heroLayers.map((layer) => layer.label)}
        active={active}
        onSelect={select}
        animating={animating}
        cycle={cycle}
        intervalMs={heroLayerIntervalMs}
        variant="overlay"
        className="absolute bottom-[12%] left-1/2 -translate-x-1/2 gap-1.5 sm:gap-2"
      />
    </div>
  );
}
