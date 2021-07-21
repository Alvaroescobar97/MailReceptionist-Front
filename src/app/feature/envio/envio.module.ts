import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ListarEnvioComponent } from './components/listar-envio/listar-envio.component';
import { EnvioRoutingModule } from './envio-routing.module';
import { EnvioService } from './shared/service/envio.service';
import { EnvioComponent } from './components/envio/envio.component';



@NgModule({
  declarations: [
    ListarEnvioComponent,
    EnvioComponent
  ],
  imports: [
    EnvioRoutingModule,
    SharedModule
  ],
  providers: [EnvioService]
})
export class EnvioModule { }
