export class Question {
  _id: string = '';
  name: string = '';
  answer: string = '';
  correctAnswer: number[] = [];
  type: number = 0;
  attachment: number = 0;
  active: boolean = true;
}
