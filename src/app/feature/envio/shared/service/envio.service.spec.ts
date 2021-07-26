import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Envio } from '../model/envio';

import { EnvioService } from './envio.service';

describe('EnvioService', () => {
  let httpMock: HttpTestingController;
  let service: EnvioService;
  const apiEndpointEnvio = `${environment.endpoint}/envios`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EnvioService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(EnvioService);
  });

  it('should be created', () => {
    const envioService: EnvioService = TestBed.inject(EnvioService);
    expect(envioService).toBeTruthy();
  });


  it('deberia listar envios', () => {
    const dummyEnvios = [
      new Envio(1, '123456789', '987654321', new Date(2021, 7, 26), 'PAQUETE', 20.5, 25000), new Envio(2, '987654321', '123456789', new Date(2021, 7, 26), 'CARTA', 0, 12500)
    ];
    service.consultar().subscribe(envios => {
      expect(envios.length).toBe(2);
      expect(envios).toEqual(dummyEnvios);
    });
    const req = httpMock.expectOne(apiEndpointEnvio);
    expect(req.request.method).toBe('GET');
    req.flush(dummyEnvios);
  });

  it('deberia crear un envio', () => {
    const dummyProducto = new Envio(1, 'emisor', 'receptor', new Date(2021, 7, 26), 'PAQUETE', 10.5, 22300);
    service.guardar(dummyProducto).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
    const req = httpMock.expectOne(apiEndpointEnvio);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body: 1}));
  });

  it('deberia actualizar un envio', () => {
    const dummyProducto = new Envio(1, 'emiEditado', 'recEditado', new Date(2021, 7, 26), 'CARTA', 0, 22300);
    service.actualizar(dummyProducto, 1).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
    const req = httpMock.expectOne(apiEndpointEnvio + `/${dummyProducto.id}`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<number>({body: 1}));
  });

});
