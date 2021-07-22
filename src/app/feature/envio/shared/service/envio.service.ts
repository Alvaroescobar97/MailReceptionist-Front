import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Envio } from '../model/envio';

@Injectable({
  providedIn: 'root'
})
export class EnvioService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Envio[]>(`${environment.endpoint}/envios`, this.http.optsName('consultar envios'));
  }

  public guardar(envio: Envio) {
    console.log(`${environment.endpoint}/envios`);
    return this.http.doPost<Envio, boolean>(`${environment.endpoint}/envios`, envio,
                                                this.http.optsName('crear envio'));
  }
}
