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
      omit: { password: true },
    });
  }

  findAll() {
    return this.prisma.users.findMany({ omit: { password: true } });
  }

  findById(id: number) {
    return this.prisma.users.findUnique({
      where: { id },
      omit: { password: true },
      include: { questions: { include: { answers: true } } },
    });
  }

  findByEmail(email: string) {
    return this.prisma.users.findUnique({
      where: { email },
      omit: { password: true },
      include: { questions: { include: { answers: true } } },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({
      where: { id },
      data: updateUserDto,
      omit: { password: true },
    });
  }

  remove(id: number) {
    return this.prisma.users.delete({
      where: { id },
      omit: { password: true },
    });
  }
}
