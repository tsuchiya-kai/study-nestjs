import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ItemsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      autoLoadEntities: true, // 通常エンティティを作成するごとに、それをtypeORMの設定に追加する必要があるが、これをtrueにしておくと自動でやってくれる
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
