import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import type { Item } from './item.module';
import { CreateItemDto } from './dto/cretate-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  // pathパラメータを取る場合は@Param
  @Get(':id')
  findByID(@Param('id', ParseUUIDPipe) id: string) {
    return this.itemsService.findById(id);
  }

  // Request body を使用する場合は@bodyと書く
  @Post()
  create(@Body() createItemDto: CreateItemDto): Item {
    return this.itemsService.create(createItemDto);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string) {
    return this.itemsService.update(id);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string): void {
    this.itemsService.delete(id);
  }
}
