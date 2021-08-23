import { Component, OnInit } from '@angular/core';
import { Envio } from '../../shared/model/envio';
import { EnvioService } from '../../shared/service/envio.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-envio',
  templateUrl: './listar-envio.component.html',
  styleUrls: ['./listar-envio.component.sass']
})
export class ListarEnvioComponent implements OnInit {

  public listaEnvios: Envio[];

  displayedColumns: string[] = ['id', 'emisor', 'receptor', 'fecha', 'tipo', 'peso', 'valor', 'actions'];
  dataSource: any;

  constructor(protected envioService: EnvioService, private router: Router) {}

  ngOnInit(): void {
    this.envioService.consultar().subscribe(res=>{
      this.listaEnvios = res;
    });
  }

  onDelete(id: number){
    Swal.fire({
      title: 'Esta seguro que desea eliminar este envio?',
      text: "Esta accion es irreversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!',
      cancelButtonText: 'No, cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.envioService.eliminar(id).subscribe(res => {
          if(res){
            Swal.fire(
              'Envio eliminado!',
              'El envio ha sido eliminado exitosamente.',
              'success'
            );
            this.router.navigate(['envio/listar']);
          }
        });
      }
    });
  }
}

