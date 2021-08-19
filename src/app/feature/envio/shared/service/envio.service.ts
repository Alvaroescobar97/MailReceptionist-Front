import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Envio } from '../model/envio';
import { formatDate } from '@angular/common';

@Injectable()
export class EnvioService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Envio[]>(`${environment.endpoint}/envios`);
  }

  public guardar(envio: Envio) {
    return this.http.doPost<Envio, number>(`${environment.endpoint}/envios`, envio);
  }

  public actualizar(envio: Envio, id: number) {
    return this.http.doPut<Envio, number>(`${environment.endpoint}/envios/${id}`, envio);
  }

  public formatearFecha(fecha: Date): string{
    return `${formatDate(
      fecha,
      'yyyy-MM-dd',
      'es-CO',
      'UTC'
    )} 00:00:00`;
  }

}
