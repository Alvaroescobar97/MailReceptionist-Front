import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../shared/model/cliente';
import { ClienteService } from '../../shared/service/cliente.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.sass']
})
export class ListarClienteComponent implements OnInit {

  listaClientes: Cliente[];
  displayedColumns: string[] = ['cedula', 'nombre', 'direccion', 'telefono', 'ciudad', 'actions'];

  constructor(protected clienteService: ClienteService, private router: Router) {}

  ngOnInit(){
    this.clienteService.consultar().subscribe(res => {
      this.listaClientes = res;
    });
  }

  clickEditar(cliente: Cliente){
    localStorage.setItem('cliente', JSON.stringify(cliente));

    this.router.navigate(['cliente/actualizar']);
  }

  clickEliminar(cedula: string){
    Swal.fire({
      title: 'Esta seguro que desea eliminar el cliente?',
      text: 'Esta accion es irreversible!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!',
      cancelButtonText: 'No, cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.eliminar(cedula).subscribe(res => {
          if (res) {
            Swal.fire(
              'Cliente eliminado!',
              'El cliente ha sido eliminado exitosamente.',
              'success'
            ).then(() => window.location.reload());
          }
        });
      }
    });
  }

}
