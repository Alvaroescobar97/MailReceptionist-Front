import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { MaterialModule } from 'src/app/material/material.module';
import { Envio } from '../../shared/model/envio';
import { EnvioService } from '../../shared/service/envio.service';

import localeCo from "@angular/common/locales/es-CO";
import { registerLocaleData } from "@angular/common";

import { ActualizarEnvioComponent } from './actualizar-envio.component';

describe('ActualizarEnvioComponent', () => {
  let component: ActualizarEnvioComponent;
  let fixture: ComponentFixture<ActualizarEnvioComponent>;
  let envioService: EnvioService;
  const envio: Envio = new Envio(1,'123456789', '987654321', new Date(2021,7,26),'PAQUETE',20.5,25000);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarEnvioComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        BrowserAnimationsModule
      ],
      providers: [EnvioService, HttpService]
    })
    .compileComponents();
    registerLocaleData(localeCo, "es-CO");
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarEnvioComponent);
    component = fixture.componentInstance;
    envioService = TestBed.inject(EnvioService);
    spyOn(envioService, 'actualizar').and.returnValue(
      of(1)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    component.envio = envio;
    expect(component).toBeTruthy();
  });

  it('Actualizando envio', () => {

    component.actualizarEnvioForm.controls.cedulaEmisor.setValue('123456789');
    component.actualizarEnvioForm.controls.cedulaReceptor.setValue('987654321');
    component.actualizarEnvioForm.controls.fecha.setValue('2021-08-04T00:00:00Z');
    component.actualizarEnvioForm.controls.tipo.setValue('CARTA');
    component.actualizarEnvioForm.controls.peso.setValue(0);
    component.actualizarEnvioForm.controls.valor.setValue(10000);
    expect(component.actualizarEnvioForm.valid).toBeTruthy();

    component.actualizar();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
    envioService.actualizar(component.actualizarEnvioForm.value, envio.id).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
  });
});
