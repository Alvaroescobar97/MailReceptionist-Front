import { by, element } from 'protractor';

export class EnvioPage {
    private linkCrearEnvio = element(by.id('linkCrearEnvio'));
    private linkListarEnvios = element(by.id('linkListarEnvio'));
    private linkActualizarEnvio = element.all(by.id('linkActualizarEnvio')).get(0);
    private listaEnvios = element.all(by.css('tr.mat-row.cdk-row.ng-star-inserted'));

    async clickBotonCrearEnvio() {
      await this.linkCrearEnvio.click();
    }

    async clickBotonListarEnvios() {
      await this.linkListarEnvios.click();
    }

    async clickBotonActualizarEnvio() {
      await this.linkActualizarEnvio.click();
    }

    async contarEnvios() {
      return this.listaEnvios.count();
    }

}
