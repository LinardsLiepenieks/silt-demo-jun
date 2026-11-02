import { calibrationGrid } from '../content/journey';
import { Avatar, MockCard } from './mock-card';

export type CalibrationProps = {
  title: string;
  /** Row labels, top to bottom. */
  rows: string[];
  /** Column labels, left to right. */
  columns: string[];
  people: {
    avatar: string;
    /** 0 is the top row. */
    row: number;
    /** 0 is the left column. */
    column: number;
    /** Ringed in green, in the tinted top-right cell. */
    highlighted?: boolean;
  }[];
};

const axisLabel =
  'text-[10px] font-medium tracking-wide text-gray-500 uppercase';

// Centre of the cell, as a percentage of the 3×3 grid.
const centre = (index: number) => `${((index * 2 + 1) / 6) * 100}%`;

/** A 3×3 calibration grid with each person placed in their cell. */
export function CalibrationMock({
  title = calibrationGrid.title,
  rows = calibrationGrid.rows,
  columns = calibrationGrid.columns,
  people = calibrationGrid.people,
}: Partial<CalibrationProps>) {
  return (
    <MockCard>
      <div className="mb-4 text-sm font-bold text-gray-900">{title}</div>
      <div className="flex gap-3">
        <div className={`flex flex-col justify-around py-1 ${axisLabel}`}>
          {rows.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
        <div className="flex-1">
          <div className="relative h-[200px]">
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 overflow-hidden rounded-md border border-gray-200">
              {Array.from({ length: 9 }, (_, cell) => {
                const row = Math.floor(cell / 3);
                const column = cell % 3;
                return (
                  <div
                    key={cell}
                    className={`border-gray-200 ${column < 2 ? 'border-r' : ''} ${
                      row < 2 ? 'border-b' : ''
                    } ${row === 0 && column === 2 ? 'bg-emerald-50/60' : ''}`}
                  />
                );
              })}
            </div>
            {people.map((person) => (
              <div
                key={person.avatar}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ top: centre(person.row), left: centre(person.column) }}
              >
                {person.highlighted ? (
                  <div className="rounded-full bg-white p-[2px] ring-2 ring-emerald-500">
                    <Avatar src={person.avatar} className="block size-7" />
                  </div>
                ) : (
                  <Avatar
                    src={person.avatar}
                    className="size-7 ring-2 ring-white"
                  />
                )}
              </div>
            ))}
          </div>
          <div className={`mt-2 grid grid-cols-3 ${axisLabel}`}>
            {columns.map((label) => (
              <div key={label} className="text-center">
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockCard>
  );
}
