import { useRef } from 'react';
import {
  journeyHeading,
  journeyIntervalMs,
  journeySlides,
} from '../content/journey';
import { useSlideshow } from '../lib/use-slideshow';
import { AgendaMock, type AgendaProps } from './agenda-mock';
import { CalibrationMock, type CalibrationProps } from './calibration-mock';
import { ChatMock, type ChatMessage } from './chat-mock';
import { ReviewMock, type ReviewProps } from './review-mock';
import { SlideshowSteps } from './slideshow-steps';

export type JourneyMock =
  | { kind: 'chat'; messages: ChatMessage[] }
  | ({ kind: 'agenda' } & AgendaProps)
  | ({ kind: 'review' } & ReviewProps)
  | ({ kind: 'calibration' } & CalibrationProps);

export type JourneySlide = {
  /** Short label on the step pill. */
  step: string;
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  mock: JourneyMock;
};

function SlideMock({ mock }: { mock: JourneyMock }) {
  switch (mock.kind) {
    case 'chat':
      return <ChatMock messages={mock.messages} />;
    case 'agenda':
      return <AgendaMock {...mock} />;
    case 'review':
      return <ReviewMock {...mock} />;
    case 'calibration':
      return <CalibrationMock {...mock} />;
  }
}

/** One moment in Sarah's journey: copy on a photo, product UI beside it. */
export function JourneySlideCard({
  slide = journeySlides[0],
  eager = true,
}: {
  slide?: JourneySlide;
  /** Load the photo straight away; later slides load lazily. */
  eager?: boolean;
}) {
  return (
    <div className="relative grid h-full grid-cols-1 items-center gap-8 overflow-hidden rounded-[32px] p-8 md:grid-cols-2 md:gap-12 md:p-12 xl:p-16">
      <img
        src={slide.image}
        alt=""
        aria-hidden="true"
        width={1774}
        height={887}
        draggable={false}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 flex max-w-[460px] flex-col gap-4">
        <p className="text-xs font-semibold tracking-[0.08em] text-white/70 uppercase">
          {slide.eyebrow}
        </p>
        <h3 className="font-display text-3xl leading-[1.1] font-medium tracking-[-1px] text-white md:text-4xl xl:text-[40px]">
          {slide.title}
        </h3>
        <p className="text-base leading-relaxed text-white/85 md:text-lg">
          {slide.text}
        </p>
      </div>
      <div className="relative z-10 flex items-center justify-center md:justify-end">
        <SlideMock mock={slide.mock} />
      </div>
    </div>
  );
}

/** "How it works": Sarah's journey as a cross-fading, auto-playing slideshow. */
export function SarahJourney({
  eyebrow = journeyHeading.eyebrow,
  title = journeyHeading.title,
  text = journeyHeading.text,
  slides = journeySlides,
  intervalMs = journeyIntervalMs,
}: {
  eyebrow?: string;
  /** Each line of the headline. */
  title?: string[];
  text?: string;
  slides?: JourneySlide[];
  intervalMs?: number;
}) {
  const root = useRef<HTMLDivElement>(null);
  const { active, select, animating, cycle } = useSlideshow(
    root,
    slides.length,
    intervalMs,
  );

  return (
    <section className="px-6 pt-16 pb-16 md:px-12 md:pt-24 md:pb-24 xl:px-36 xl:pt-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 flex flex-col gap-2 md:mb-14">
          <p className="text-sm leading-4 font-medium text-[#5f5b5b]">
            {eyebrow}
          </p>
          <h2 className="max-w-[1100px] font-display text-4xl leading-[1.05] font-medium tracking-[-2px] text-black sm:text-5xl xl:text-[68px]">
            {title.map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-4 max-w-[1100px] text-lg text-[#151515]/70">
            {text}
          </p>
        </div>
        <div ref={root} className="relative">
          <div className="relative min-h-[680px] md:min-h-[460px]">
            {slides.map((slide, index) => {
              const isActive = index === active;
              return (
                <div
                  key={slide.step}
                  aria-hidden={!isActive}
                  inert={!isActive}
                  className={`absolute inset-0 transition-opacity duration-400 ease-[ease] motion-reduce:transition-none ${
                    isActive ? 'opacity-100' : 'pointer-events-none opacity-0'
                  }`}
                >
                  <JourneySlideCard slide={slide} eager={index === 0} />
                </div>
              );
            })}
          </div>
          <SlideshowSteps
            labels={slides.map((slide) => slide.step)}
            active={active}
            onSelect={select}
            animating={animating}
            cycle={cycle}
            intervalMs={intervalMs}
            variant="light"
            className="mt-8 flex-nowrap justify-center gap-2"
          />
        </div>
      </div>
    </section>
  );
}
