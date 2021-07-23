import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Envio } from '../../shared/model/envio';
import { formatDate } from '@angular/common';
import { EnvioService } from '../../shared/service/envio.service';
@Component({
  selector: 'app-actualizar-envio',
  templateUrl: './actualizar-envio.component.html',
  styleUrls: ['./actualizar-envio.component.sass']
})
export class ActualizarEnvioComponent implements OnInit {

  envio: Envio;

  actualizarEnvioForm: FormGroup;

  constructor(protected envioService: EnvioService,private route: ActivatedRoute,private router: Router) {


  }

  ngOnInit(): void {
    this.envio = {
      id: this.route.snapshot.queryParams.id,
      cedulaEmisor: this.route.snapshot.queryParams.cedulaEmisor,
      cedulaReceptor: this.route.snapshot.queryParams.cedulaReceptor,
      fecha: this.route.snapshot.queryParams.fecha,
      tipo: this.route.snapshot.queryParams.tipo,
      peso:this.route.snapshot.queryParams.peso,
      valor: this.route.snapshot.queryParams.valor,
    };

    console.log(this.envio);
    this.construirFormulario();
    let fechaFormateada = `${formatDate(
      this.envio.fecha,
      "yyyy-MM-dd",
      "es-CO",
      "UTC"
    )}`;
    this.actualizarEnvioForm.get('cedulaEmisor').patchValue(this.envio.cedulaEmisor);
    this.actualizarEnvioForm.get('cedulaReceptor').patchValue(this.envio.cedulaReceptor);
    this.actualizarEnvioForm.get('fecha').patchValue(fechaFormateada);
    this.actualizarEnvioForm.get('tipo').patchValue(this.envio.tipo);
    this.actualizarEnvioForm.get('peso').patchValue(this.envio.peso);
    this.actualizarEnvioForm.get('valor').patchValue(this.envio.valor);
  }

  private construirFormulario(){
    this.actualizarEnvioForm = new FormGroup({
      cedulaEmisor: new FormControl('', [Validators.required, Validators.maxLength(12)]),
      cedulaReceptor: new FormControl('', [Validators.required, Validators.maxLength(12)]),
      fecha: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      peso: new FormControl({value:0}, [Validators.required, Validators.min(0)]),
      valor: new FormControl({value:0}, [Validators.required, Validators.min(0)])
    });
  }

  actualizar(){
    let body = {...this.actualizarEnvioForm.value, fecha: `${formatDate(
      this.actualizarEnvioForm.get("fecha")?.value,
      "yyyy-MM-dd",
      "es-CO",
      "UTC"
    )} 00:00:00` };
    console.log(body);
    this.envioService.actualizar(body,this.envio.id).subscribe(res=> {
      console.log(res);
      this.router.navigate(['/listar']);
    },err=> console.log(err));
  }

}
