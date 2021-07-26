import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ListarEnvioComponent } from './components/listar-envio/listar-envio.component';
import { EnvioRoutingModule } from './envio-routing.module';
import { EnvioService } from './shared/service/envio.service';
import { EnvioComponent } from './components/envio/envio.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CrearEnvioComponent } from './components/crear-envio/crear-envio.component';
import localeCo from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';
import { ActualizarEnvioComponent } from './components/actualizar-envio/actualizar-envio.component';
registerLocaleData(localeCo, 'es-CO');

@NgModule({
  declarations: [
    ListarEnvioComponent,
    EnvioComponent,
    CrearEnvioComponent,
    ActualizarEnvioComponent
  ],
  imports: [
    EnvioRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [EnvioService]
})
export class EnvioModule { }
