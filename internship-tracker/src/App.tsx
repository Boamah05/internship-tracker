import { useState } from 'react';
import { ApplicationForm } from './components/ApplicationForm.tsx';
import { ApplicationList } from './components/ApplicationList.tsx';
import type { ApplicationStatus, Internship } from './types/internship.ts';
import { APPLICATION_STATUSES } from './types/internship.ts';

type Filter = ApplicationStatus | 'All';

let nextId = 1;

export const App = () => {
  const [entries, setEntries] = useState<Internship[]>([]);
  const [filter, setFilter] = useState<Filter>('All');

  const handleAdd = (entry: Omit<Internship, 'id'>) => {
    setEntries((prev) => [...prev, { ...entry, id: String(nextId++) }]);
  };

  const visible = filter === 'All'
    ? entries
    : entries.filter((e) => e.status === filter);

  return (
    <main className="tracker">
      <h1>Internship Tracker</h1>
      <ApplicationForm onSubmit={handleAdd} />

      <div className="filter-bar">
        <label htmlFor="filter">Filter by status</label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value as Filter)}
        >
          <option value="All">All</option>
          {APPLICATION_STATUSES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <ApplicationList entries={visible} />
    </main>
  );
};
