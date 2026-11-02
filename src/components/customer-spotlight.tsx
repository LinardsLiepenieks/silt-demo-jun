import { useRef, useState } from 'react';
import { spotlight } from '../content/spotlight';

export function CustomerSpotlight() {
  const { title, quote, author, video } = spotlight;
  const videoRef = useRef<HTMLVideoElement>(null);
  // Once started, the native controls take over; the button never returns.
  const [started, setStarted] = useState(false);

  function play() {
    setStarted(true);
    void videoRef.current?.play();
  }

  return (
    <section className="px-6 pt-16 pb-16 md:px-12 md:pt-24 md:pb-24 xl:px-36 xl:pt-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 md:mb-14">
          <h2 className="max-w-[900px] font-display text-4xl leading-[1.05] font-medium tracking-[-2px] text-black sm:text-5xl xl:text-[68px]">
            {title}
          </h2>
        </div>
        <div className="relative flex flex-col items-center gap-10 rounded-[32px] bg-[#f5f4f4] p-8 md:p-12 lg:flex-row lg:gap-[72px] lg:px-20 lg:py-14">
          <figure className="flex w-full gap-4 lg:w-[492px]">
            <QuoteIcon />
            <div className="flex flex-1 flex-col gap-6">
              <blockquote className="font-display text-2xl leading-[1.25] font-medium tracking-[-1px] text-[#151515] md:text-[32px] md:leading-[40px]">
                {quote}
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#1c1c1c]">
                  <img
                    src={author.photo}
                    alt={author.name}
                    width={800}
                    height={800}
                    className="h-full w-full object-cover object-top"
                    draggable={false}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-signature text-[20px] leading-7 text-[#1b1b1b]">
                    {author.name}
                  </p>
                  <p className="text-sm text-[#898484]">{author.role}</p>
                </div>
              </figcaption>
            </div>
          </figure>
          <div className="relative aspect-[716/384] w-full overflow-hidden rounded-[32px] lg:max-w-[716px] lg:flex-1">
            <video
              ref={videoRef}
              src={video.src}
              poster={video.poster}
              preload="metadata"
              playsInline
              controls={started}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {!started && (
              <button
                type="button"
                onClick={play}
                className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/40 bg-white/20 px-4 py-2 text-xs font-semibold whitespace-nowrap text-white backdrop-blur transition-colors hover:bg-white/30 sm:text-sm md:bottom-12 md:px-6 md:py-3 md:text-base"
              >
                <PlayIcon />
                <span>{video.playLabel}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="mt-1 h-7 w-7 shrink-0 -scale-x-100 text-black/80"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6q0 4-4 5m13-7h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6q0 4-4 5"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M6 4v16a1 1 0 0 0 1.524.852l13-8a1 1 0 0 0 0-1.704l-13-8A1 1 0 0 0 6 4"
      />
    </svg>
  );
}
