import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ClienteService } from './cliente.service';
import { Cliente } from '../model/cliente';
import { environment } from 'src/environments/environment';

describe('ClienteService', () => {
  let httpMock: HttpTestingController;
  let service: ClienteService;
  const apiEndpointClienteConsulta = `${environment.endpoint}/clientes`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClienteService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ClienteService);
  });

  it('should be created', () => {
    const clientService : ClienteService = TestBed.inject(ClienteService);
    expect(clientService).toBeTruthy();
  });

  it('deberia listar clientes', () => {
    const dummyClientes = [
      new Cliente('123456789', 'Ferney','Cra 23 #34-45',123456789,'Buenaventura'), new Cliente('987654321', 'Santiago','Cra 12 #32-48',987654321,'Cartagena')
    ];
    service.consultar().subscribe(clientes => {
      expect(clientes.length).toBe(2);
      expect(clientes).toEqual(dummyClientes);
    });
    const req = httpMock.expectOne(apiEndpointClienteConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyClientes);
  });

});
