import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import * as bcryptjs from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload';
import { LoginResponse } from './interfaces/login-response';

import { LoginDto, UpdateAuthDto, CreateUserDto, RegisterUserDto } from './dto/index.dto';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) { }


//Creacion de usuario!
  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const { password, ...userData } = createUserDto;
      const newUser = new this.userModel({
        password: bcryptjs.hashSync(password, 10),
        ...userData,
      });

      await newUser.save();
      const { password: _, ...user } = newUser.toJSON();

      return user;

    } catch (err) {
      console.log(err.code)
      if (err.code === 11000) {
        throw new BadRequestException(`${createUserDto.email} Ya existe este correo!`);
      }
      throw new InternalServerErrorException('Algo ha ocurrido');
    }
  }

//Registro de Usuarios!
  async register(registerUserDto: RegisterUserDto): Promise<LoginResponse> {

    const user = await this.create(registerUserDto);
    console.log(user)
    return {
      user: user,
      token: this.getJwtToken({ id: user._id })
    };
  }

//Login con jwt de usuario
  async login(loginDto: LoginDto): Promise<LoginResponse> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Credencviales no validas');
    }

    if (!bcryptjs.compareSync(password, user.password)) {
      throw new UnauthorizedException('Credencviales no validas');
    }

    const { password: _, ...rest } = user.toJSON();

    return {
      user: rest,
      token: this.getJwtToken({ id: user.id }),
    };
  }

// Creacion de JWT parea el usuario
  getJwtToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }

// Recupera todos los usuarios
  findAll() {
    return `This action returns all auth`;
  }

//Encuentra un usuario en especifico
  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

//Actualiza usuario con ID
  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

//Elimina usuario con ID
  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
