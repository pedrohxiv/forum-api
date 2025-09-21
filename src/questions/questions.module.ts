import { Module } from '@nestjs/common';

import { DatabaseModule } from 'src/database/database.module';
import { QuestionsController } from 'src/questions/questions.controller';
import { QuestionsService } from 'src/questions/questions.service';

@Module({
  imports: [DatabaseModule],
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionsModule {}
