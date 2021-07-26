import { by, element } from 'protractor';

export class ToolbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-toolbar/mat-toolbar/nav/a[1]'));
    linkEnvio = element(by.xpath('/html/body/app-root/app-toolbar/mat-toolbar/nav/a[2]'));
    linkCliente = element(by.xpath('/html/body/app-root/app-toolbar/mat-toolbar/nav/a[3]'));

    async clickBotonEnvio() {
        await this.linkEnvio.click();
    }
    async clickBotonClientes() {
      await this.linkCliente.click();
  }
}
