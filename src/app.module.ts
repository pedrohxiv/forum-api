import { Module } from '@nestjs/common';

import { AuthModule } from 'src/auth/auth.module';
import { DatabaseModule } from 'src/database/database.module';
import { QuestionsModule } from 'src/questions/questions.module';
import { UserModule } from 'src/user/user.module';
import { AnswersModule } from './answers/answers.module';

@Module({
  imports: [AuthModule, UserModule, DatabaseModule, QuestionsModule, AnswersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
