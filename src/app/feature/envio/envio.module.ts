import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ListarEnvioComponent } from './components/listar-envio/listar-envio.component';
import { EnvioRoutingModule } from './envio-routing.module';
import { EnvioService } from './shared/service/envio.service';
import { EnvioComponent } from './components/envio/envio.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CrearEnvioComponent } from './components/crear-envio/crear-envio.component';



@NgModule({
  declarations: [
    ListarEnvioComponent,
    EnvioComponent,
    CrearEnvioComponent
  ],
  imports: [
    EnvioRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [EnvioService]
})
export class EnvioModule { }
