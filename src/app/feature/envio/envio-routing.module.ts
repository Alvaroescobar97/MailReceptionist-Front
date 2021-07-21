import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnvioComponent } from './components/envio/envio.component';
import { ListarEnvioComponent } from './components/listar-envio/listar-envio.component';

const routes: Routes = [
  {
    path: '',
    component: EnvioComponent,
    children: [
      {
        path: 'listar',
      component: ListarEnvioComponent
    }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnvioRoutingModule { }
