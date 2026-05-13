export interface AIModel {
  id: string;
  name: string;
  provider: string;
  speed: number; // 1-100
  intelligence: number; // 1-100
  color: string;
  description: string;
  badge?: string;
  icon?: string;
}
