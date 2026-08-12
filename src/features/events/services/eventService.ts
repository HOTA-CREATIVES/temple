import { db } from '@/lib/firebase';
import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  query,
  orderBy,
} from 'firebase/firestore';

export interface EventItem {
  id: string;
  title: string;
  titleTelugu: string;
  date: string;
  category: string;
  description: string;
  createdAt: number;
}

const COLLECTION_NAME = 'events';

const INITIAL_EVENTS: EventItem[] = [
  {
    id: 'evt-1',
    title: 'Sri Rama Navami Celestial Wedding',
    titleTelugu: 'శ్రీ రామనవమి సీతారాముల కల్యాణం',
    date: '2026-08-20',
    category: 'Grand Festival',
    description: 'Grand celestial wedding ceremony with special Alankaram and Annadanam.',
    createdAt: 1000,
  },
  {
    id: 'evt-2',
    title: 'Vaisakha Pournami Garuda Seva',
    titleTelugu: 'వైశాఖ పౌర్ణమి గరుడ సేవ',
    date: '2026-08-25',
    category: 'Procession',
    description: 'Procession of the deity on sacred Garuda Vahanam around temple Mada streets.',
    createdAt: 2000,
  },
];

let eventsCache: EventItem[] | null = null;

export const getStoredEventsFIFO = (): EventItem[] => {
  if (eventsCache) return eventsCache;
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('temple_events_fifo');
    if (stored) {
      try {
        eventsCache = JSON.parse(stored);
        return eventsCache!;
      } catch {
        // fallback
      }
    }
  }
  return INITIAL_EVENTS;
};

export const fetchEventsFromFirestore = async (): Promise<EventItem[]> => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'asc'));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      const data: EventItem[] = [];
      snapshot.forEach((doc) => data.push(doc.data() as EventItem));
      eventsCache = data;
      if (typeof window !== 'undefined') {
        localStorage.setItem('temple_events_fifo', JSON.stringify(data));
      }
      return data;
    }
  } catch (err) {
    console.warn('Firestore events fetch failed:', err);
  }
  return getStoredEventsFIFO();
};

export const addEventFIFO = async (event: Omit<EventItem, 'id' | 'createdAt'>): Promise<EventItem[]> => {
  const current = getStoredEventsFIFO();
  const id = `evt-${Date.now()}`;
  const newEvent: EventItem = {
    ...event,
    id,
    createdAt: Date.now(),
  };

  const updated = [...current, newEvent];
  eventsCache = updated;

  if (typeof window !== 'undefined') {
    localStorage.setItem('temple_events_fifo', JSON.stringify(updated));
  }

  try {
    await setDoc(doc(db, COLLECTION_NAME, id), newEvent);
  } catch (err) {
    console.warn('Firestore add event failed:', err);
  }

  return updated;
};

export const deleteEvent = async (id: string): Promise<EventItem[]> => {
  const current = getStoredEventsFIFO();
  const updated = current.filter((e) => e.id !== id);
  eventsCache = updated;

  if (typeof window !== 'undefined') {
    localStorage.setItem('temple_events_fifo', JSON.stringify(updated));
  }

  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
  } catch (err) {
    console.warn('Firestore delete event failed:', err);
  }

  return updated;
};
