import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma.service';
import { CreateQuestionDto } from 'src/questions/dto/create-question.dto';
import { UpdateQuestionDto } from 'src/questions/dto/update-question.dto';

@Injectable()
export class QuestionsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createQuestionDto: CreateQuestionDto, userId: number) {
    return this.prisma.questions.create({
      data: { ...createQuestionDto, userId },
    });
  }

  findAll() {
    return this.prisma.questions.findMany();
  }

  findOne(id: number) {
    return this.prisma.questions.findUnique({ where: { id } });
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return this.prisma.questions.update({
      where: { id },
      data: updateQuestionDto,
    });
  }

  remove(id: number) {
    return this.prisma.questions.delete({ where: { id } });
  }
}
