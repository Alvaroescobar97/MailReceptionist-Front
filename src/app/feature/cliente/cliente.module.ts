import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from './shared/service/cliente.service';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { MaterialModule } from 'src/app/material/material.module';



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
