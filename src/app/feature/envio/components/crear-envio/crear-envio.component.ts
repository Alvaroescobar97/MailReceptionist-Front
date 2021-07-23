import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnvioService } from '../../shared/service/envio.service';

@Component({
  selector: 'app-crear-envio',
  templateUrl: './crear-envio.component.html',
  styleUrls: ['./crear-envio.component.sass']
})
export class CrearEnvioComponent implements OnInit {

  envioForm: FormGroup;

  constructor(protected envioService: EnvioService) {

  }

  ngOnInit(): void {
    this.construirFormulario();
  }

  crear(){
    let body = {...this.envioForm.value, fecha: `${formatDate(
      this.envioForm.get("fecha")?.value,
      "yyyy-MM-dd",
      "es-CO",
      "UTC"
    )} 00:00:00` };
    console.log(body);
    this.envioService.guardar(body).subscribe(res=> console.log(res),err=> console.log(err));
  }

  private construirFormulario(){
    this.envioForm = new FormGroup({
      cedulaEmisor: new FormControl('', [Validators.required, Validators.maxLength(12)]),
      cedulaReceptor: new FormControl('', [Validators.required, Validators.maxLength(12)]),
      fecha: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      peso: new FormControl({value:0}, [Validators.required, Validators.min(0)]),
      valor: new FormControl(0, [Validators.required, Validators.min(0)])
    });
  }

}
