export class Producto {
  constructor(
    public uuid: string,
    public codigo: number,
    public nombre: string,
    public unidadMedida: string,
    public cantidad: number
  ) {}
}
