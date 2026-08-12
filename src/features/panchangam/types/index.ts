export interface PanchangamDay {
  date: string;              // YYYY-MM-DD
  tithiEn: string;           // e.g. "Shukla Paksha Ekadashi"
  tithiTe: string;           // e.g. "శుక్ల పక్ష ఏకాదశి"
  nakshatraEn: string;       // e.g. "Rohini"
  nakshatraTe: string;       // e.g. "రోహిణి"
  rahuKalam: string;         // e.g. "04:30 PM – 06:00 PM"
  yamagandam?: string;       // e.g. "12:00 PM – 01:30 PM"
  sunrise?: string;          // e.g. "06:12 AM"
  sunset?: string;           // e.g. "06:34 PM"
  festivalsEn?: string[];    // e.g. ["Sri Rama Navami"]
  festivalsTe?: string[];    // e.g. ["శ్రీ రామనవమి"]
}
