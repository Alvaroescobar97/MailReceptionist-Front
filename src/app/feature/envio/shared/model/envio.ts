export class Envio {
  id: number;
  cedulaEmisor: String;
  cedulaReceptor: String;
  fecha: Date;
  tipo: String;
  peso: number;
  valor: number;

  constructor(id: number, cedulaEmisor: string,cedulaReceptor: String,fecha: Date,tipo: String,peso: number,valor: number) {
    this.id = id;
    this.cedulaEmisor = cedulaEmisor;
    this.cedulaReceptor = cedulaReceptor;
    this.fecha = fecha;
    this.tipo = tipo;
    this.peso = peso;
    this.valor = valor;
}

}
