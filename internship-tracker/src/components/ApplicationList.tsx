import type { Internship } from '../types/internship.ts';

type Props = {
  entries: Internship[];
};

export const ApplicationList = ({ entries }: Props) => {
  if (entries.length === 0) {
    return <p className="list-empty">No applications yet. Add one above.</p>;
  }

  return (
    <ul className="app-list">
      {entries.map(({ id, company, status }) => (
        <li key={id} className="app-list-item">
          <span className="app-company">{company}</span>
          <span className={`app-status status-${status.toLowerCase()}`}>
            {status}
          </span>
        </li>
      ))}
    </ul>
  );
};
