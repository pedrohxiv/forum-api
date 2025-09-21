import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const hashPassword = await bcrypt.hash(createUserDto.password, 10);

    return this.prisma.users.create({
      data: { ...createUserDto, password: hashPassword },
    });
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  findById(id: number) {
    return this.prisma.users.findUnique({ where: { id } });
  }

  findByEmail(email: string) {
    return this.prisma.users.findUnique({ where: { email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.users.delete({
      where: { id },
    });
  }
}
