export type SevaCategory = 'daily' | 'special' | 'kalyanam' | 'abhishekam';

export interface Seva {
  id: string;
  titleEn: string;
  titleTe: string;
  descriptionEn: string;
  descriptionTe: string;
  category: SevaCategory;
  price: number;
  durationMinutes: number;
  maxSlotsPerDay: number;
  imageUrl?: string;
  isActive: boolean;
}

export interface SevaSlot {
  id: string;
  sevaId: string;
  date: string; // YYYY-MM-DD
  startTime: string; // HH:mm
  totalSlots: number;
  bookedSlots: number;
}

export interface SankalpamDetails {
  devoteeName: string;
  gothram: string;
  nakshatram: string;
  rasi?: string;
  phone: string;
  email?: string;
  familyMembers?: {
    name: string;
    nakshatram?: string;
  }[];
}

export interface SevaBooking {
  id: string;
  sevaId: string;
  slotId: string;
  devoteeId?: string;
  date: string;
  sankalpam: SankalpamDetails;
  amount: number;
  paymentId: string;
  paymentStatus: 'pending' | 'completed' | 'failed';
  bookingStatus: 'confirmed' | 'cancelled' | 'attended';
  qrCodeUrl?: string;
  createdAt: string;
}
