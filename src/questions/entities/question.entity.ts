import { Questions } from '@prisma/client';

import { Answer } from 'src/answers/entities/answer.entity';
import { User } from 'src/user/entities/user.entity';

export class Question implements Questions {
  id: number;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  user: User;
  answers: Answer[];
}
