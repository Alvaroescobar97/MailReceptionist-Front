import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '@shared/components/dialog/dialog.component';
import { EnvioService } from '../../shared/service/envio.service';

@Component({
  selector: 'app-crear-envio',
  templateUrl: './crear-envio.component.html',
  styleUrls: ['./crear-envio.component.sass']
})
export class CrearEnvioComponent implements OnInit {

  envioForm: FormGroup;

  constructor(protected envioService: EnvioService, private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.construirFormulario();
  }

  crear(){
    const body = {...this.envioForm.value, fecha: this.envioService.formatearFecha(this.envioForm.get('fecha')?.value)};

    this.envioService.guardar(body).subscribe(() => {
      this.router.navigate(['/listar']);
    }, err => {
      if (err.error.nombreExcepcion && err.error.mensaje){
        const tituloSeparado = err.error.nombreExcepcion.replace(/([a-z](?=[A-Z]))/g, '$1 ');
        this.dialog.open(DialogComponent, { data: { title: tituloSeparado, content: err.error.mensaje}});
      }
    });
  }

  private construirFormulario(){
    this.envioForm = new FormGroup({
      cedulaEmisor: new FormControl('', [Validators.required, Validators.maxLength(12)]),
      cedulaReceptor: new FormControl('', [Validators.required, Validators.maxLength(12)]),
      fecha: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      peso: new FormControl(0, [Validators.required, Validators.min(0)]),
      valor: new FormControl(0, [Validators.required, Validators.min(0)])
    });
  }
}
