import { quarterReview } from '../content/journey';
import { MockCard } from './mock-card';

export type ReviewProps = {
  title: string;
  meta: string;
  rating: string;
  summary: string;
  tags: { label: string; tone: 'purple' | 'blue' }[];
};

const tagTones = {
  purple: 'bg-purple-50 text-purple-700',
  blue: 'bg-blue-50 text-blue-700',
};

/** A drafted performance review with its rating and evidence counts. */
export function ReviewMock({
  title = quarterReview.title,
  meta = quarterReview.meta,
  rating = quarterReview.rating,
  summary = quarterReview.summary,
  tags = quarterReview.tags,
}: Partial<ReviewProps>) {
  return (
    <MockCard>
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="text-sm font-bold text-gray-900">{title}</div>
          <div className="text-xs text-gray-400">{meta}</div>
        </div>
        <div className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
          {rating}
        </div>
      </div>
      <p className="mb-4 text-sm leading-snug text-gray-600">{summary}</p>
      <div className="flex flex-wrap gap-1.5 text-[11px]">
        {tags.map((tag) => (
          <span
            key={tag.label}
            className={`rounded-full px-2 py-1 ${tagTones[tag.tone]}`}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </MockCard>
  );
}
