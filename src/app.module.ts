import { Module } from '@nestjs/common';

import { AuthModule } from 'src/auth/auth.module';
import { DatabaseModule } from 'src/database/database.module';
import { QuestionsModule } from 'src/questions/questions.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [AuthModule, UserModule, DatabaseModule, QuestionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
