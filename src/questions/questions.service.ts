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
    return this.prisma.questions.findMany({ include: { answers: true } });
  }

  findOne(id: number) {
    return this.prisma.questions.findUnique({
      where: { id },
      include: { answers: true, user: { select: { name: true, email: true } } },
    });
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
