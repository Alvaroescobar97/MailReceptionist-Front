import { Component, OnInit } from '@angular/core';
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

  constructor(protected envioService: EnvioService) {}

  ngOnInit(): void {
    this.listaEnvios = this.envioService.consultar();
  }

  onDelete(id: number){
    this.envioService.eliminar(id);
    console.log("deleted "+id);
  }
}

