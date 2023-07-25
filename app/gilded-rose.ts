export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, quality, sellIn) {
        this.name = name;
        this.quality = quality;
        this.sellIn = sellIn;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    tick() {
        for (let item of this.items) {
            this.updateQuality(item);
            this.updateSellIn(item);
            if (item.sellIn < 0) {
                this.updateExpired(item);
            }
        }

        return this.items;
    }

    updateQuality(item: Item) {
        if (item.name === 'Aged Brie' || item.name === 'Backstage passes to a TAFKAL80ETC concert') {
            this.increaseQuality(item);
            if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
                if (item.sellIn < 11) this.increaseQuality(item);
                if (item.sellIn < 6) this.increaseQuality(item);
            }
        } else if (item.name !== 'Sulfuras, Hand of Ragnaros') {
            this.decreaseQuality(item);
            if (item.name === 'Conjured Mana Cake') {
                this.decreaseQuality(item);
            }
        }
    }

    updateSellIn(item: Item) {
        if (item.name !== 'Sulfuras, Hand of Ragnaros') {
            item.sellIn--;
        }
    }

    updateExpired(item: Item) {
        if (item.name === 'Aged Brie') {
            this.increaseQuality(item);
        } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
            item.quality = 0;
        } else if (item.name === 'Conjured Mana Cake') {
            this.decreaseQuality(item);
            this.decreaseQuality(item);
        } else if (item.name !== 'Sulfuras, Hand of Ragnaros') {
            this.decreaseQuality(item);
        }
    }

    increaseQuality(item: Item) {
        if (item.quality < 50) {
            item.quality++;
        }
    }

    decreaseQuality(item: Item) {
        if (item.quality > 0) {
            item.quality--;
        }
    }
}
