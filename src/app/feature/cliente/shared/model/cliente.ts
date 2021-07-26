export class Cliente {
  cedula: string;
  nombre: string;
  direccion: string;
  telefono: number;
  ciudad: string;

  constructor(cedula: string, nombre: string, direccion: string, telefono: number, ciudad: string) {
    this.cedula = cedula;
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.ciudad = ciudad;
  }
}
