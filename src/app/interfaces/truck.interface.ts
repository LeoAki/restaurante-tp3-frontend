export class Truck {
    constructor(
      public uuid: string,
      public license_plate: string,
      public brand: string,
      public status: number,
      public created_at: string,
      public updated_at: string,
      public deleted_at: string
    ) {}
  }
  