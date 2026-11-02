import { oneOnOneAgenda } from '../content/journey';
import { MockCard } from './mock-card';

export type AgendaProps = {
  title: string;
  meta: string;
  items: {
    text: string;
    /** Added by the employee, not generated. */
    added?: boolean;
  }[];
};

/** An auto-generated 1:1 agenda with one item the employee added. */
export function AgendaMock({
  title = oneOnOneAgenda.title,
  meta = oneOnOneAgenda.meta,
  items = oneOnOneAgenda.items,
}: Partial<AgendaProps>) {
  return (
    <MockCard>
      <div className="mb-1 text-sm font-bold text-gray-900">{title}</div>
      <div className="mb-4 text-xs text-gray-400">{meta}</div>
      <ul className="space-y-2.5 text-sm text-gray-600">
        {items.map((item) => (
          <li key={item.text} className="flex items-start gap-2.5">
            <div
              className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                item.added ? 'bg-gray-300' : 'bg-[#F59E0B]'
              }`}
            />
            <span className={item.added ? 'text-gray-400 italic' : ''}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </MockCard>
  );
}
