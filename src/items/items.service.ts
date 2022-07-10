import { Injectable } from '@nestjs/common';
import type { Item } from './item.module';
import { CreateItemDto } from './dto/cretate-item.dto';
import { v4 as uuid } from 'uuid';

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

  create(createItemDto: CreateItemDto): Item {
    const item = { id: uuid(), status: 'ON_SALE', ...createItemDto } as const;
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
