import { by, element } from 'protractor';

export class ClientePage {
  private listaClientes = element.all(by.css('tr.mat-row.cdk-row.ng-star-inserted'));

  async contarClientes() {
    return this.listaClientes.count();
  }
}
