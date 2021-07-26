import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { MaterialModule } from 'src/app/material/material.module';
import { EnvioService } from '../../shared/service/envio.service';

import localeCo from "@angular/common/locales/es-CO";
import { registerLocaleData } from "@angular/common";

import { CrearEnvioComponent } from './crear-envio.component';

describe('CrearEnvioComponent', () => {
  let component: CrearEnvioComponent;
  let fixture: ComponentFixture<CrearEnvioComponent>;
  let envioService: EnvioService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEnvioComponent ],
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
    fixture = TestBed.createComponent(CrearEnvioComponent);
    component = fixture.componentInstance;
    envioService = TestBed.inject(EnvioService);
    spyOn(envioService, 'guardar').and.returnValue(
      of(1)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.envioForm.valid).toBeFalsy();
  });

  it('Registrando envio', () => {
    expect(component.envioForm.valid).toBeFalsy();
    component.envioForm.controls.cedulaEmisor.setValue('123456789');
    component.envioForm.controls.cedulaReceptor.setValue('987654321');
    component.envioForm.controls.fecha.setValue('2021-08-04T00:00:00Z');
    component.envioForm.controls.tipo.setValue('CARTA');
    component.envioForm.controls.peso.setValue(0);
    component.envioForm.controls.valor.setValue(10000);
    expect(component.envioForm.valid).toBeTruthy();

    component.crear();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
    envioService.guardar(component.envioForm.value).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
  });
});
