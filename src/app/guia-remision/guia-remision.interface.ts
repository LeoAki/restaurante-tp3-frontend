import { Carrier } from '../interfaces/carrier.interface';
import {Truck} from '../interfaces/truck.interface';
import {Almacen} from '../interfaces/almacen.interface';

export class Waybill {
  constructor(
    public uuid: string,
    public carrier: Carrier[],
    public truck: Truck[],
    
    public warehouse_from_id: Almacen[],
    public warehouse_to_id: Almacen[],

    public date_time: string,
    public comment: string,
    public status: string,
    public delivery_status: string
  ) {}
}
