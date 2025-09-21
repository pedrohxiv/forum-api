import { Module } from '@nestjs/common';

import { AuthModule } from 'src/auth/auth.module';
import { DatabaseModule } from 'src/database/database.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [AuthModule, UserModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
