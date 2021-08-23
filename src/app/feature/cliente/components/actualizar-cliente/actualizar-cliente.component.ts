import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '@shared/components/dialog/dialog.component';
import { Cliente } from '../../shared/model/cliente';
import { ClienteService } from '../../shared/service/cliente.service';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.sass']
})
export class ActualizarClienteComponent implements OnInit {

  cliente: Cliente;

  actualizarClienteForm: FormGroup;

  constructor(protected clienteService: ClienteService, private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.cliente = JSON.parse(localStorage.getItem('cliente'));

    this.construirFormulario();

    this.actualizarClienteForm.get('cedula').patchValue(this.cliente.cedula);
    this.actualizarClienteForm.get('nombre').patchValue(this.cliente.nombre);
    this.actualizarClienteForm.get('direccion').patchValue(this.cliente.direccion);
    this.actualizarClienteForm.get('telefono').patchValue(this.cliente.telefono);
    this.actualizarClienteForm.get('ciudad').patchValue(this.cliente.ciudad);
  }

  construirFormulario(){
    this.actualizarClienteForm = new FormGroup({
      cedula: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      ciudad: new FormControl('', [Validators.required]),
    });
  }

  actualizar(){
    this.clienteService.actualizar(this.actualizarClienteForm.value, this.cliente.cedula).subscribe( () => {
      this.router.navigate(['cliente/listar']);
    }, err => {
      if (err.error.nombreExcepcion && err.error.mensaje){
        const titleSeparated = err.error.nombreExcepcion.replace(/([a-z](?=[A-Z]))/g, '$1 ');
        this.dialog.open(DialogComponent, {data: { title: titleSeparated, content: err.error.mensaje}});
      }
    });
  }

}
