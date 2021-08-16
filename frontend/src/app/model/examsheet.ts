import { Question } from "./question";
import { User } from "./user";

export class Examsheet {
  _id: string = '';
  name: string = '';
  category: number = 0;
  user: User = new User();
  questions: Question[] = [];
  time: Date = new Date();
}
