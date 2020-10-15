import { StateClient } from '../enums/state-client.enum';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  tva: number = 20; //par défault
  id: number;
  name: string;
  ca: number;
  comment: string;
  state: StateClient;

  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
