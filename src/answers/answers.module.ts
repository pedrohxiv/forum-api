import { Module } from '@nestjs/common';

import { AnswersController } from 'src/answers/answers.controller';
import { AnswersService } from 'src/answers/answers.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AnswersController],
  providers: [AnswersService],
})
export class AnswersModule {}
