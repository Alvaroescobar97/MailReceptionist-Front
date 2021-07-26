import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Envio } from '../../shared/model/envio';
import { EnvioService } from '../../shared/service/envio.service';

@Component({
  selector: 'app-listar-envio',
  templateUrl: './listar-envio.component.html',
  styleUrls: ['./listar-envio.component.sass']
})
export class ListarEnvioComponent implements OnInit {

  public listaEnvios: Observable<Envio[]>;

  displayedColumns: string[] = ['id', 'emisor', 'receptor', 'fecha', 'tipo', 'peso', 'valor', 'action'];
  dataSource: any;

  constructor(protected envioService: EnvioService, private router: Router) {

  }

  ngOnInit(): void {
    this.listaEnvios = this.envioService.consultar();
  }

  onEdit(element: any){
    console.log(element);
    this.router.navigate(['../actualizar', { id: element.id }]);
  }
}

