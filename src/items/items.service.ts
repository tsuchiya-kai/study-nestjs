import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  findAll() {
    return 'items service の返り値';
  }
}
