import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Product]),
        ClientsModule.register([
            {
              name: 'PRODUCT_SERVICE',
              transport: Transport.RMQ,
              options: {
                urls: ['amqps://voawoena:GpFt0bfs_7AEpdjxWrF1-fpHXGz_-6JM@hawk.rmq.cloudamqp.com/voawoena'],
                queue: 'main_queue',
                queueOptions: {
                  durable: false
                },
              },
            },
          ]),
    ],
    controllers:[ProductController],
    providers: [ProductService]
})
export class ProductModule {}
