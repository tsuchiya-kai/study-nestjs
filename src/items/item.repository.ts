import Item from 'src/entities/item.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Item);
new Item
export class ItemRepository extends Repository<Item> {}
