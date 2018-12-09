import {Item} from './item';
import {Stamp} from './stamp';

export class Factura {
  constructor(
    public _id: string,
    public date: string,
    public dueDate: string,
    public client: number,
    public items: Item[],
    public stamp: Stamp
  ) {}

}
