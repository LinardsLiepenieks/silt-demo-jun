import { useEffect, useState } from 'react';
import { headerCtas, navEntries, siteUrl } from '../content/navigation';
import { MobileNav } from './mobile-nav';
import { NavMenu } from './nav-menu';
import { WindmillMark, WindmillWordmark } from './windmill-logo';

const buttonBase =
  'inline-flex items-center font-medium whitespace-nowrap transition-all duration-200 ease-out active:scale-[0.98]';
const logInClass =
  'bg-white/50 text-gray-900 ring-1 ring-gray-300/70 backdrop-blur-sm hover:bg-white/80 hover:ring-gray-400/70';
const bookDemoClass =
  'bg-gradient-to-b from-gray-800 to-gray-950 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:from-gray-700 hover:to-gray-900';

const pillShadow =
  'shadow-[inset_0_0.5px_0_0_rgba(239,250,255,0.5),0_213px_60px_0_rgba(0,0,0,0.00),0_137px_55px_0_rgba(0,0,0,0.01),0_77px_46px_0_rgba(0,0,0,0.02),0_34px_34px_0_rgba(0,0,0,0.03),0_9px_19px_0_rgba(0,0,0,0.04)]';

// The pink/orange/blue wash that fades down behind the top of the page.
const topGlowStyle = {
  background:
    'linear-gradient(to right, #ffaedcc1 0%, #ffc37e98 25%, #6185f05c 50%)',
  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
  maskRepeat: 'no-repeat',
  maskSize: '100% 100%',
};

// The floating pill drops its top margin once the page scrolls past 100px.
function useScrolledPast(offset: number) {
  const [past, setPast] = useState(false);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setPast(window.scrollY > offset);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [offset]);
  return past;
}

export function SiteHeader() {
  const scrolled = useScrolledPast(100);

  return (
    <>
      <div
        className="pointer-events-none absolute top-0 right-0 left-0 z-1 hidden h-55 lg:block"
        style={topGlowStyle}
      />
      <header className="sticky top-0 z-50">
        <div className="bg-background/80 backdrop-blur-2xl lg:hidden">
          <div className="container flex items-center py-2">
            <div className="flex-1">
              <a
                href={siteUrl}
                aria-label="Windmill"
                className="flex items-center"
              >
                <WindmillMark className="h-10 w-10 text-black" />
              </a>
            </div>
            <div className="flex flex-1 items-center justify-end gap-2">
              <a
                href={headerCtas.logIn.href}
                className={`${buttonBase} ${logInClass} rounded-sm px-4 py-1.5 text-xs`}
              >
                {headerCtas.logIn.label}
              </a>
              <a
                href={headerCtas.bookDemo.href}
                className={`${buttonBase} ${bookDemoClass} rounded-sm px-4 py-1.5 text-xs`}
              >
                {headerCtas.bookDemo.label}
              </a>
              <MobileNav entries={navEntries} />
            </div>
          </div>
        </div>

        <div
          className={`hidden px-4 py-3 transition-all duration-300 ease-in-out lg:block ${scrolled ? '' : 'mt-6'}`}
        >
          <div className="relative mx-auto max-w-[1096px]">
            <div
              className={`rounded-full bg-gradient-to-br from-white/89 via-white/64 to-white/0 py-3 pr-7 pl-5 backdrop-blur-[40px] ${pillShadow}`}
            >
              <div className="flex items-center">
                <div className="flex-1">
                  <a
                    href={siteUrl}
                    aria-label="Windmill"
                    className="flex items-center"
                  >
                    <WindmillWordmark className="h-10 w-auto text-black" />
                  </a>
                </div>
                <div className="flex flex-1 justify-center">
                  <NavMenu entries={navEntries} />
                </div>
                <div className="ml-5 flex flex-1 justify-end gap-2">
                  <a
                    href={headerCtas.logIn.href}
                    className={`${buttonBase} ${logInClass} rounded-md px-4 py-2.5 text-sm`}
                  >
                    {headerCtas.logIn.label}
                  </a>
                  <a
                    href={headerCtas.bookDemo.href}
                    className={`${buttonBase} ${bookDemoClass} rounded-md px-4 py-2.5 text-sm`}
                  >
                    {headerCtas.bookDemo.label}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
