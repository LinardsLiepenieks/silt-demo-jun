import type { ReactNode } from 'react';

/** The white product-UI card each journey slide shows on its right. */
export function MockCard({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-[360px] rounded-2xl border border-black/5 bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
      {children}
    </div>
  );
}

/** A round person photo used inside the mocks. */
export function Avatar({
  src,
  className = 'size-8',
}: {
  src: string;
  className?: string;
}) {
  return (
    <div
      className={`flex-shrink-0 overflow-hidden rounded-full shadow-xs ${className}`}
    >
      <img
        src={src}
        alt=""
        draggable={false}
        className="h-full w-full scale-110 rounded-full object-cover"
      />
    </div>
  );
}
