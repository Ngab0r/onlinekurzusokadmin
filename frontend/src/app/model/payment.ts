import { User } from "./user";

export class Payment {

    _id: string = '';
    user: User = new User();
    money: number = 0;
    time: Date = new Date();
}
