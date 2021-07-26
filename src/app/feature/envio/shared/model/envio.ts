export class Envio {
  id: number;
  cedulaEmisor: string;
  cedulaReceptor: string;
  fecha: Date;
  tipo: string;
  peso: number;
  valor: number;

  constructor(id: number, cedulaEmisor: string, cedulaReceptor: string, fecha: Date, tipo: string, peso: number, valor: number) {
    this.id = id;
    this.cedulaEmisor = cedulaEmisor;
    this.cedulaReceptor = cedulaReceptor;
    this.fecha = fecha;
    this.tipo = tipo;
    this.peso = peso;
    this.valor = valor;
}

}
