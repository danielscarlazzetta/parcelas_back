import { Module } from '@nestjs/common';
import { ParcelaService } from './parcela.service';
import { ParcelaController } from './parcela.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Parcela, ParcelaSchema } from './entities/parcela.entity';

@Module({
  controllers: [ParcelaController],
  providers: [ParcelaService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Parcela.name,
        schema: ParcelaSchema,
      }
    ]),
  ]
})
export class ParcelaModule {}
