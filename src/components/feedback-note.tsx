import { brushes, type FeedbackNoteData } from '../content/feedback';

export function FeedbackNote({
  before,
  highlight,
  brush,
  after,
  left,
  rotate,
  zIndex,
  background,
}: FeedbackNoteData) {
  return (
    <div
      // On hover the note straightens, grows and jumps above its neighbours, after a short delay.
      className="card-shadow absolute top-0 w-64 cursor-pointer rounded-lg border border-gray-100 p-4 font-display select-none [transition:rotate_.2s_ease-out,scale_.2s_ease-out,box-shadow_.2s_ease-out,z-index_0s] hover:z-999! hover:scale-105 hover:rotate-0! hover:shadow-[0_20px_40px_-5px_#0000004d,0_10px_15px_-3px_#0003]! hover:[transition-delay:.1s,.1s,.1s,.15s]"
      style={{
        left: `calc(50% - 628px + ${left}px)`,
        rotate: `${rotate}deg`,
        zIndex,
        backgroundColor: background,
      }}
    >
      <p className="text-center text-xl leading-snug font-medium tracking-tight text-gray-900 sm:text-2xl">
        {before}
        {highlight && brush && (
          <span
            className="relative z-1 inline rounded-lg bg-center bg-no-repeat bg-size-[100%_100%] py-1"
            style={{
              backgroundImage: `url(/images/brush/${brushes[brush]}.svg)`,
            }}
          >
            {highlight}
          </span>
        )}
        {after}
      </p>
    </div>
  );
}
