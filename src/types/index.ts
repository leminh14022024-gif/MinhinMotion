export type SectionTab = 
  | 'overview' 
  | 'cars' 
  | 'media' 
  | 'events' 
  | 'content' 
  | 'community' 
  | 'trust' 
  | 'business'
  | 'flywheel';

export interface Car {
  id: string;
  name: string;
  year: number;
  badge: string;
  category: 'Track Weapon' | 'Mountain Canyon' | 'Daily Icon';
  engine: string;
  powerHp: number;
  torqueNm: number;
  weightKg: number;
  zeroToSixtySec: number;
  topSpeedMph: number;
  maxRpm: number;
  soundProfile: 'flat6' | 'v8' | 'inline6Turbo';
  image: string;
  story: string;
  modifications: {
    category: string;
    parts: string[];
  }[];
  lapTimes: {
    track: string;
    time: string;
    condition: string;
  }[];
  dynoCurve: { rpm: number; hp: number; torque: number }[];
}

export interface MediaEpisode {
  id: string;
  title: string;
  series: 'Apex Chronicles' | 'Canyon Patrol' | 'Track Battles' | 'The Build';
  duration: string;
  views: string;
  publishDate: string;
  summary: string;
  image: string;
  videoUrl?: string;
  featuredCar: string;
  cameraRig: string;
  highlights: string[];
}

export interface AutomotiveEvent {
  id: string;
  title: string;
  type: 'Track Invitational' | 'Canyon Dawn Patrol' | 'Paddock Pop-Up';
  date: string;
  location: string;
  trackName?: string;
  entryFee: number;
  spotsTotal: number;
  spotsRemaining: number;
  description: string;
  schedule: { time: string; activity: string }[];
  rules: string[];
}

export interface JournalArticle {
  id: string;
  title: string;
  subtitle: string;
  category: 'Engineering & Setup' | 'Track Discipline' | 'Ownership Economics' | 'Car Culture';
  readTime: string;
  publishDate: string;
  author: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
}

export interface CommunityPost {
  id: string;
  author: string;
  handle: string;
  avatarSeed: string;
  carName: string;
  badge: 'Track Master' | 'Builder' | 'Collector' | 'Driver';
  timestamp: string;
  content: string;
  likes: number;
  repliesCount: number;
  tags: string[];
}

export interface MerchItem {
  id: string;
  name: string;
  price: number;
  category: 'Apparel' | 'Gear' | 'Collectibles';
  description: string;
  sizes?: string[];
  inStock: boolean;
  colorway: string;
}

export interface BrandPartner {
  id: string;
  name: string;
  category: 'Tires & Rubber' | 'Braking Systems' | 'Lubricants & Fluids' | 'Performance Exhaust' | 'Suspension';
  collaboration: string;
  status: 'Active Technical Partner' | 'Long-Term Sponsor';
  deliverablesCount: number;
}

export interface FlywheelNode {
  id: string;
  label: string;
  level: number;
  parentIds: string[];
  childIds: string[];
  category: 'identity' | 'pillars' | 'nexus' | 'distribution' | 'monetization';
  summary: string;
  tactics: string[];
  kpis: { label: string; value: string }[];
  targetSection: SectionTab;
}
