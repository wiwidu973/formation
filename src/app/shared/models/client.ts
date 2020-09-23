import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  tva: number = 20; //par défault
  id: number;
  name: String;
  ca: number;
  comment: string;
  state: string;

  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
