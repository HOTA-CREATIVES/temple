import { Seva, SevaSlot, SevaBooking } from '../types';

export const MOCK_SEVAS: Seva[] = [
  {
    id: 'nitya-archana',
    titleEn: 'Nitya Archana',
    titleTe: 'నిత్య అర్చన',
    descriptionEn: 'Daily special archana performed with sacred flower offerings and Ashtottara Namavali.',
    descriptionTe: 'పవిత్ర పుష్పార్చన మరియు అష్టోత్తర నామావళితో ప్రతిరోజూ నిర్వహించే ప్రత్యేక అర్చన.',
    category: 'daily',
    price: 116,
    durationMinutes: 30,
    maxSlotsPerDay: 50,
    isActive: true,
  },
  {
    id: 'rudra-abhishekam',
    titleEn: 'Rudra Abhishekam',
    titleTe: 'రుద్రాభిషేకం',
    descriptionEn: 'Sacred bath ritual to Lord Shiva accompanied by Vedic chantings of Sri Rudram.',
    descriptionTe: 'శ్రీ రుద్ర మంత్రోచ్ఛారణల నడుమ స్వామివారికి నిర్వహించే పవిత్ర అభిషేక సేవ.',
    category: 'abhishekam',
    price: 516,
    durationMinutes: 60,
    maxSlotsPerDay: 15,
    isActive: true,
  },
  {
    id: 'srinivasa-kalyanam',
    titleEn: 'Srinivasa Kalyanam',
    titleTe: 'శ్రీనివాస కళ్యాణం',
    descriptionEn: 'Grand celestial wedding ceremony performed for divine blessings of peace and prosperity.',
    descriptionTe: 'శాంతి మరియు సమృద్ధి కోసం నిర్వహించే దివ్య కళ్యాణ మహోత్సవం.',
    category: 'kalyanam',
    price: 1116,
    durationMinutes: 120,
    maxSlotsPerDay: 5,
    isActive: true,
  },
];

export async function fetchSevas(): Promise<Seva[]> {
  // Mock service call returning initial Sevas
  return MOCK_SEVAS;
}

export async function fetchSevaById(id: string): Promise<Seva | null> {
  const seva = MOCK_SEVAS.find((s) => s.id === id);
  return seva || null;
}
