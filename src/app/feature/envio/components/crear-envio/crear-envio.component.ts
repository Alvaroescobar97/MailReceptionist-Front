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
    console.log(this.envioForm.value);
    this.envioService.guardar(this.envioForm.value);
  }

  private construirFormulario(){
    this.envioForm = new FormGroup({
      cedulaEmisor: new FormControl('', [Validators.required]),
      cedulaReceptor: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      peso: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required])
    });
  }

}
