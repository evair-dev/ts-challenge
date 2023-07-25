import {IItem} from './interfaces';


export class GeneralItem implements IItem {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {
    if (this.quality > 0) {
      this.quality--;
    }
  }

  updateSellIn() {
    this.sellIn--;
  }

  updateExpired() {
    if (this.quality > 0) {
      this.quality--;
    }
  }
}

export class AgedBrie extends GeneralItem {
  updateQuality() {
    if (this.quality < 50) {
      this.quality++;
    }
  }

  updateExpired() {
    if (this.quality < 50) {
      this.quality++;
    }
  }
}

export class BackstagePass extends GeneralItem {
  updateQuality() {
    if (this.quality < 50) {
      this.quality++;
      if (this.sellIn < 11 && this.quality < 50) {
        this.quality++;
      }
      if (this.sellIn < 6 && this.quality < 50) {
        this.quality++;
      }
    }
  }

  updateExpired() {
    this.quality = 0;
  }
}

export class Sulfuras extends GeneralItem {
  updateQuality() {}

  updateSellIn() {}

  updateExpired() {}
}

export class Conjured extends GeneralItem {
  updateQuality() {
    this.decreaseQualityTwice();
  }

  updateExpired() {
    this.decreaseQualityTwice();
  }

  private decreaseQualityTwice() {
    if (this.quality > 0) {
      this.quality = Math.max(0, this.quality - 2);
    }
  }
}

