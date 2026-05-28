export type ApplicationStatus =
  | 'Wishlist'
  | 'Applied'
  | 'Interview'
  | 'Offer'
  | 'Rejected';

export const APPLICATION_STATUSES: ApplicationStatus[] = [
  'Wishlist',
  'Applied',
  'Interview',
  'Offer',
  'Rejected',
];

export type Internship = {
  id: string;
  company: string;
  status: ApplicationStatus;
};
