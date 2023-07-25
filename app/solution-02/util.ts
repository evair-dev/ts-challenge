import {Item} from '../gilded-rose';
import {AgedBrie, BackstagePass, Conjured, GeneralItem, Sulfuras} from './models';


export class ItemFactory {
  static createItem(item: Item) {
    switch (item.name) {
      case 'Aged Brie':
        return new AgedBrie(item.name, item.sellIn, item.quality);
      case 'Backstage passes to a TAFKAL80ETC concert':
        return new BackstagePass(item.name, item.sellIn, item.quality);
      case 'Sulfuras, Hand of Ragnaros':
        return new Sulfuras(item.name, item.sellIn, item.quality);
      case 'Conjured Mana Cake':
        return new Conjured(item.name, item.sellIn, item.quality);
      default:
        return new GeneralItem(item.name, item.sellIn, item.quality);
    }
  }
}
