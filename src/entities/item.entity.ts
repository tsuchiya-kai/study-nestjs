import type { Item as ItemModuleType } from '../items/item.module';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

type ItemStatus = ItemModuleType['status'];

@Entity()
class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  status: ItemStatus;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}

export default Item;
