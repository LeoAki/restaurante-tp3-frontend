export class Almacen {
  constructor(
    public uuid: string,
    public code: number,
    public name: string,
    public address: string,
    public contact_name: string,
    public contact_email: string,
    public contact_phone_number: string,
    public latitude: string,
    public longitude: string,
    public status: string
  ) {}
}
