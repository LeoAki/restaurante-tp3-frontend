export class Producto {
  constructor(
    public uuid: string,
    public sku: string,
    public name: string,
    public description: string,
    public unit_of_measurement: string,
    public quantity: number,
    public disabled?: boolean
  ) {}
}
