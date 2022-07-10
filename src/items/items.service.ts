import { Injectable } from '@nestjs/common';
import type { Item } from './item.module';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  findAll(): Item[] {
    return this.items;
  }

  findById(id: string): Item | undefined {
    const item = this.items.find((item) => item.id === id);
    return item;
  }

  create(item: Item): Item {
    this.items = [...this.items, item];
    return item;
  }

  update(id: string): Item {
    const item = this.findById(id);
    item.status = 'SOLD_OUT';

    return item;
  }

  delete(id: string): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
