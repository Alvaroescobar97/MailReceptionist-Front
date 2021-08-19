import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ClienteService } from './shared/service/cliente.service';

@NgModule({
  declarations: [
    ListarClienteComponent
  ],
  imports: [
    ClienteRoutingModule,
    CommonModule,
    MaterialModule
  ],
  providers: [ClienteService]
})
export class ClienteModule { }
