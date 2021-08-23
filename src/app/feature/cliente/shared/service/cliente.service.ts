import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';

@Injectable()
export class ClienteService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Cliente[]>(`${environment.endpoint}/clientes`);
  }

  public guardar(cliente: Cliente) {
    return this.http.doPost<Cliente, string>(`${environment.endpoint}/clientes`, cliente);
  }

  public actualizar(cliente: Cliente, cedula: string) {
    return this.http.doPut<Cliente, string>(`${environment.endpoint}/clientes/${cedula}`, cliente);
  }

  public eliminar(cedula: string) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/clientes/${cedula}`);
  }

}
