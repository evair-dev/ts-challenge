export interface IItem {
  name: string;
  sellIn: number;
  quality: number;
  updateQuality(): void;
  updateSellIn(): void;
  updateExpired(): void;
}
