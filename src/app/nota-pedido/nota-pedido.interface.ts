import { Producto } from '../interfaces/producto.interface';

export class NotaPedido {
  constructor(
    public uuid: string,
    public date: Date,
    public almacen: string,
    public direccion: string,
    public productos: Producto[]
  ) {}
}
