import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateParcelaDto } from './dto/create-parcela.dto';
import { UpdateParcelaDto } from './dto/update-parcela.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Parcela } from './entities/parcela.entity';
import { Model } from 'mongoose';

@Injectable()
export class ParcelaService {


  constructor(
    @InjectModel(Parcela.name)
    private parcelaModel: Model<Parcela>,
  ) { }


  async create(createParcelaDto: CreateParcelaDto): Promise<Parcela> {

    try {
      const newParcela = new this.parcelaModel(createParcelaDto);
      return await newParcela.save()

    } catch (err) {
      if (err.code === 11000) {
        throw new BadRequestException(`${createParcelaDto.direccion} Ya existe esta direccion!`);
      }
      throw new InternalServerErrorException('Algo ha ocurrido');
    }

  }

  findAll() {
    return this.parcelaModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} parcela`;
  }

  update(id: number, updateParcelaDto: UpdateParcelaDto) {
    return `This action updates a #${id} parcela`;
  }

  remove(id: number) {
    return `This action removes a #${id} parcela`;
  }
}
