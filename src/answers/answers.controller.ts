import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

import { AnswersService } from 'src/answers/answers.service';
import { CreateAnswerDto } from 'src/answers/dto/create-answer.dto';
import { UpdateAnswerDto } from 'src/answers/dto/update-answer.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('answers')
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @UseGuards(AuthGuard)
  @Post(':questionId')
  create(
    @Param('questionId') questionId: string,
    @Body() createAnswerDto: CreateAnswerDto,
    @Request() req: any,
  ) {
    return this.answersService.create(createAnswerDto, req.sub.sub, +questionId);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.answersService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.answersService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnswerDto: UpdateAnswerDto) {
    return this.answersService.update(+id, updateAnswerDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.answersService.remove(+id);
  }
}
