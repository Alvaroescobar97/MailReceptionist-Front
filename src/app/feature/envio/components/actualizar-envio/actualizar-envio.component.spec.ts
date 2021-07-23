import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEnvioComponent } from './actualizar-envio.component';

describe('ActualizarEnvioComponent', () => {
  let component: ActualizarEnvioComponent;
  let fixture: ComponentFixture<ActualizarEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarEnvioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
