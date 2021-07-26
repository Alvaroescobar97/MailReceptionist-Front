import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { EnvioService } from '../../shared/service/envio.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ListarEnvioComponent } from './listar-envio.component';
import { Envio } from '../../shared/model/envio';
import { of } from 'rxjs';

describe('ListarEnvioComponent', () => {
  let component: ListarEnvioComponent;
  let fixture: ComponentFixture<ListarEnvioComponent>;
  let envioService: EnvioService;
  const listaEnvios: Envio[] = [new Envio(1,'123456789', '987654321', new Date(2021,7,26),'PAQUETE',20.5,25000), new Envio(2,'987654321', '123456789',new Date(2021,7,26),'CARTA',0,12500)];


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEnvioComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [EnvioService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEnvioComponent);
    component = fixture.componentInstance;
    envioService = TestBed.inject(EnvioService);
    spyOn(envioService, 'consultar').and.returnValue(
      of(listaEnvios)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaEnvios.subscribe(resultado=>{
      expect(resultado.length).toBe(2);
    });
  });
});
