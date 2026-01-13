export type WashType = 'basico' | 'standard' | 'premium';

export interface WashOption {
  type: WashType;
  name: string;
  description: string;
  price: number;
}

export interface User {
  name: string;
}

export type Screen = 'welcome' | 'washSelection' | 'washDescription';
