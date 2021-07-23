export class Cliente {
  cedula: String;
  nombre: String;
  direccion: String;
  telefono: Number;
  ciudad: String;

  constructor(cedula: String, nombre: String,direccion: String,telefono: Number,ciudad: String) {
    this.cedula = cedula;
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.ciudad = ciudad;
  }
}
