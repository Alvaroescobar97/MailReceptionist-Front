import { by, element } from 'protractor';

export class EnvioPage {
  private linkCrearEnvio = element(by.id('linkCrearEnvio'));
  private linkListarEnvios = element(by.id('linkListarEnvio'));
  private linkActualizarEnvio = element.all(by.id('linkActualizarEnvio')).get(0);
  private listaEnvios = element.all(by.css('tr.mat-row.cdk-row.ng-star-inserted'));

  private inputCedulaEmisorEnvio = element(by.id('cedulaEmisor'));
  private inputCedulaReceptorEnvio = element(by.id('cedulaReceptor'));
  private inputFechaEnvio = element(by.id('fecha'));
  private selectTipoEnvio = element(by.id('tipo'));
  private inputPesoEnvio = element(by.id('peso'));
  private inputValorEnvio = element(by.id('valor'));

  private botonSubmitEnvio = element(by.css('button.mat-raised-button'));

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

  async ingresarCedulaEmisor(cedulaEmisor) {
    await this.inputCedulaEmisorEnvio.sendKeys(cedulaEmisor);
  }

  async ingresarCedulaReceptor(cedulaReceptor) {
    await this.inputCedulaReceptorEnvio.sendKeys(cedulaReceptor);
  }

  async limpiarFecha() {
    await this.inputFechaEnvio.clear();
  }

  async ingresarFecha(fecha) {
    await this.inputFechaEnvio.sendKeys(fecha);
  }

  async limpiarTipo() {
    await this.selectTipoEnvio.clear();
  }

  async ingresarTipo(tipo) {
    await this.selectTipoEnvio.sendKeys(tipo);
  }

  async limpiarPeso() {
    await this.inputPesoEnvio.clear();
  }

  async ingresarPeso(peso) {
    await this.inputPesoEnvio.sendKeys(peso);
  }

  async limpiarValor() {
    await this.inputValorEnvio.clear();
  }

  async ingresarValor(valor) {
    await this.inputValorEnvio.sendKeys(valor);
  }

  async clickBotonSubmitFormularioEnvio() {
    await this.botonSubmitEnvio.click();
  }
}
