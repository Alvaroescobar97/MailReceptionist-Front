import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../shared/model/cliente';
import { ClienteService } from '../../shared/service/cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.sass']
})
export class ListarClienteComponent implements OnInit {

  listaClientes: Observable< Cliente[] >;
  displayedColumns: string[] = ['cedula', 'nombre', 'direccion', 'telefono', 'ciudad'];

  constructor(protected clienteService: ClienteService) {}

  ngOnInit(){
    this.listaClientes = this.clienteService.consultar();
  }

}
