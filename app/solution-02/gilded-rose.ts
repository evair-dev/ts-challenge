
import {ItemFactory} from './util';
import {IItem} from './interfaces';

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, quality: number, sellIn: number) {
        this.name = name;
        this.quality = quality;
        this.sellIn = sellIn;
    }
}

export class GildedRose {
    items: Array<IItem>;

    constructor(items = [] as Array<Item>) {
        this.items = items.map(item => ItemFactory.createItem(item));
    }

    tick() {
        for (let item of this.items) {
            item.updateQuality();
            item.updateSellIn();
            if (item.sellIn < 0) {
                item.updateExpired();
            }
        }

        return this.items;
    }
}
