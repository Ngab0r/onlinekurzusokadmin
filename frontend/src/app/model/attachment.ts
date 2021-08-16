import { User } from "./user";

export class Attachment {
  _id: string = '';
  name: string = '';
  url: string = '';
  user: User = new User();
}
