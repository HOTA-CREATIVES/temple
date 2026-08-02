export interface DonationCause {
  id: string;
  titleEn: string;
  titleTe: string;
  descriptionEn: string;
  descriptionTe: string;
  targetAmount?: number;
  raisedAmount?: number;
  icon: string;
  taxExempt80G: boolean;
}

export interface DonorProfile {
  name: string;
  email: string;
  phone: string;
  panNumber?: string;
  address?: string;
}

export interface DonationRecord {
  id: string;
  causeId: string;
  amount: number;
  donor: DonorProfile;
  paymentId: string;
  receiptNumber: string;
  createdAt: string;
}
