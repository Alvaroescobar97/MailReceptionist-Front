import { NgModule } from '@angular/core';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ClienteService } from './shared/service/cliente.service';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { SharedModule } from '@shared/shared.module';
import { ActualizarClienteComponent } from './components/actualizar-cliente/actualizar-cliente.component';

@NgModule({
  declarations: [
    ListarClienteComponent,
    CrearClienteComponent,
    ActualizarClienteComponent
  ],
  imports: [
    ClienteRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [ClienteService]
})
export class ClienteModule { }
