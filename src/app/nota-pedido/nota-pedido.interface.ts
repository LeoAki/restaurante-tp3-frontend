import { Producto } from '../interfaces/producto.interface';

export class NotaPedido {
  constructor(
    public uuid: string,
    public date: string,
    public almacen: string,
    public direccion: string,
    public productos: Producto[],
    public estado: string
  ) {}
}
