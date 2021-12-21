import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { Product } from './product/product.entity';
import { ProductModule } from './product/product.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'learn-nest',
    entities: [Product],
    synchronize: true,
  }),
  ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
