import { useState } from 'react';
import type { ApplicationStatus, Internship } from '../types/internship.ts';
import { APPLICATION_STATUSES } from '../types/internship.ts';

type Props = {
  onSubmit: (entry: Omit<Internship, 'id'>) => void;
};

type FormErrors = {
  company?: string;
};

export const ApplicationForm = ({ onSubmit }: Props) => {
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState<ApplicationStatus>('Applied');
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    if (!company.trim()) {
      setErrors({ company: 'Company name is required.' });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({ company: company.trim(), status });
    setCompany('');
    setStatus('Applied');
  };

  return (
    <form className="app-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="e.g. Acme Corp"
          aria-describedby={errors.company ? 'company-error' : undefined}
        />
        {errors.company && (
          <span id="company-error" className="field-error">
            {errors.company}
          </span>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value as ApplicationStatus)}
        >
          {APPLICATION_STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="submit-btn">
        Add Application
      </button>
    </form>
  );
};
