import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import type { Item } from './item.module';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  // pathパラメータを取る場合は@Param
  @Get(':id')
  findByID(@Param('id') id: string) {
    return this.itemsService.findById(id);
  }

  // Request body を使用する場合は@bodyと書く
  @Post()
  create(
    @Body('id') id: string,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description: string,
  ): Item {
    const item = {
      id,
      name,
      price,
      description,
      status: 'ON_SALE',
    } as const;
    return this.itemsService.create(item);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.itemsService.update(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.itemsService.delete(id);
  }
}
