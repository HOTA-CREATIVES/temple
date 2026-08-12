import { db } from '@/lib/firebase';
import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  deleteDoc,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';
import { PanchangamDay } from '../types';

const COLLECTION_NAME = 'panchangam';

export const initialPanchangamData: PanchangamDay[] = [
  {
    date: '2026-08-12',
    tithiEn: 'Shukla Paksha Ekadashi',
    tithiTe: 'శుక్ల పక్ష ఏకాదశి',
    nakshatraEn: 'Rohini',
    nakshatraTe: 'రోహిణి నక్షత్రం',
    rahuKalam: '12:00 PM – 01:30 PM',
    yamagandam: '07:30 AM – 09:00 AM',
    sunrise: '06:00 AM',
    sunset: '06:30 PM',
    festivalsEn: ['Pavitropana Ekadashi', 'Shravana Fasting'],
    festivalsTe: ['పవిత్రోపణ ఏకాదశి', 'శ్రావణ సోమవారం'],
  },
  {
    date: '2026-08-13',
    tithiEn: 'Shukla Paksha Dwadashi',
    tithiTe: 'శుక్ల పక్ష ద్వాదశి',
    nakshatraEn: 'Mrigashira',
    nakshatraTe: 'మృగశిర నక్షత్రం',
    rahuKalam: '01:30 PM – 03:00 PM',
    yamagandam: '06:00 AM – 07:30 AM',
    sunrise: '06:01 AM',
    sunset: '06:29 PM',
    festivalsEn: ['Dwadashi Parana'],
    festivalsTe: ['ద్వాదశి పారణ'],
  },
  {
    date: '2026-08-14',
    tithiEn: 'Shukla Paksha Trayodashi',
    tithiTe: 'శుక్ల పక్ష త్రయోదశి',
    nakshatraEn: 'Ardra',
    nakshatraTe: 'ఆర్ద్ర నక్షత్రం',
    rahuKalam: '10:30 AM – 12:00 PM',
    yamagandam: '03:00 PM – 04:30 PM',
    sunrise: '06:01 AM',
    sunset: '06:28 PM',
    festivalsEn: ['Pradosha Vratam'],
    festivalsTe: ['ప్రదోష వ్రతం'],
  },
];

// Memory cache for quick response
let panchangamCache: PanchangamDay[] | null = null;

export const getStoredPanchangamData = (): PanchangamDay[] => {
  if (panchangamCache) return panchangamCache;
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('temple_panchangam_data');
    if (stored) {
      try {
        panchangamCache = JSON.parse(stored);
        return panchangamCache!;
      } catch {
        // fallback
      }
    }
  }
  return initialPanchangamData;
};

export const fetchPanchangamFromFirestore = async (): Promise<PanchangamDay[]> => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('date', 'asc'));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      const data: PanchangamDay[] = [];
      snapshot.forEach((doc) => data.push(doc.data() as PanchangamDay));
      panchangamCache = data;
      if (typeof window !== 'undefined') {
        localStorage.setItem('temple_panchangam_data', JSON.stringify(data));
      }
      return data;
    }
  } catch (err) {
    console.warn('Firestore fetch failed, using local cache:', err);
  }
  return getStoredPanchangamData();
};

export const savePanchangamData = async (data: PanchangamDay[]) => {
  panchangamCache = data;
  if (typeof window !== 'undefined') {
    localStorage.setItem('temple_panchangam_data', JSON.stringify(data));
  }
  // Sync to Firestore
  try {
    for (const item of data) {
      if (item.date) {
        await setDoc(doc(db, COLLECTION_NAME, item.date), item, { merge: true });
      }
    }
  } catch (err) {
    console.warn('Firestore save sync warning:', err);
  }
};

export const getPanchangamForDate = (dateStr: string): PanchangamDay | null => {
  const dataset = getStoredPanchangamData();
  return dataset.find((p) => p.date === dateStr) || dataset[0] || null;
};
