import {
  customerLogos,
  customersHeading,
  type CustomerLogo,
} from '../content/hero';

/**
 * Customer wordmarks, sized to their artwork so the gaps between them read
 * evenly. They wrap into centred rows on small screens and spread across a
 * single row from lg up.
 */
export function CustomerLogos() {
  return (
    <>
      <div className="mb-2 text-center text-sm text-muted-foreground">
        {customersHeading}
      </div>
      <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 sm:gap-x-10 lg:flex-nowrap lg:justify-evenly lg:gap-x-0">
        {customerLogos.map((logo) => (
          <div key={logo.file} className="flex items-center py-2">
            <Logo {...logo} />
          </div>
        ))}
      </div>
    </>
  );
}

// The logo files are padded unevenly, so each image is oversized and shifted
// inside a clipping box, then flattened to ink and multiplied onto the page.
function Logo({ name, file, width, artHeight, crop }: CustomerLogo) {
  const [w, h, left, top] = crop;
  return (
    <span
      className="inline-flex shrink-0 items-center align-middle mix-blend-multiply [container-type:size] [--logo-height:2.25rem] sm:[--logo-height:2.5rem] md:[--logo-height:3rem] lg:[--logo-height:2.25rem] 2xl:[--logo-height:2.75rem]"
      style={{
        width: `calc(var(--logo-height) * ${width})`,
        height: 'var(--logo-height)',
      }}
    >
      <span
        className="relative block w-full shrink-0 overflow-hidden"
        style={{ height: `calc(var(--logo-height) * ${artHeight})` }}
      >
        <img
          src={`/images/customers/${file}.webp`}
          alt={name}
          loading="lazy"
          draggable={false}
          className="absolute max-w-none object-fill [filter:grayscale(1)_brightness(.65)_contrast(6)]"
          style={{
            width: `${w}%`,
            height: `${h}%`,
            left: `${left}%`,
            top: `${top}%`,
          }}
        />
      </span>
    </span>
  );
}
