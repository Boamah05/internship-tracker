import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { App } from '../App.tsx';

const fillAndSubmit = async (company: string, status?: string) => {
  const user = userEvent.setup();
  await user.type(screen.getByLabelText('Company'), company);
  if (status) {
    await user.selectOptions(screen.getByLabelText('Status'), status);
  }
  await user.click(screen.getByRole('button', { name: 'Add Application' }));
};

describe('Internship Tracker', () => {
  it('test_add_application: adds an application and shows it in the list', async () => {
    render(<App />);

    await fillAndSubmit('Google', 'Applied');

    // getByText throws if not found — that IS the assertion
    expect(screen.getByText('Google')).toBeTruthy();
    expect(screen.getAllByText('Applied').length).toBeGreaterThan(0);
  });

  it('test_filter_by_status: shows only applications matching the selected status', async () => {
    const user = userEvent.setup();
    render(<App />);

    await fillAndSubmit('Google', 'Applied');
    await fillAndSubmit('Meta', 'Offer');

    // Both entries visible before filtering
    expect(screen.getByText('Google')).toBeTruthy();
    expect(screen.getByText('Meta')).toBeTruthy();

    // Filter to Offer only
    await user.selectOptions(screen.getByLabelText('Filter by status'), 'Offer');

    expect(screen.queryByText('Google')).toBeNull();
    expect(screen.getByText('Meta')).toBeTruthy();
  });
});
