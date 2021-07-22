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

  public listaEnvios : Observable<Envio[]>;


  constructor(protected envioService: EnvioService) {

  }

  ngOnInit(): void {
    this.listaEnvios = this.envioService.consultar();
  }

}

