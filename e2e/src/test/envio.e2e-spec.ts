import { browser } from 'protractor';
import { AppPage } from '../app.po';
import { EnvioPage } from '../page/envio/envio.po';
import { ToolbarPage } from '../page/toolbar/toolbar.po';

describe('workspace-project Envio', () => {
    let page: AppPage;
    let toolbar: ToolbarPage;
    let envio: EnvioPage;

    beforeEach(() => {
        page = new AppPage();
        toolbar = new ToolbarPage();
        envio = new EnvioPage();
    });

    it('Deberia listar envios', () => {
      page.navigateTo();
      toolbar.clickBotonEnvio();
      envio.clickBotonListarEnvios();

      expect(envio.contarEnvios()).toBe(9);
    });

    it('Deberia crear envio', async () => {
      page.navigateTo();
      toolbar.clickBotonEnvio();

      envio.clickBotonListarEnvios();
      let enviosIniciales = await envio.contarEnvios();

      envio.clickBotonCrearEnvio();

      envio.ingresarCedulaEmisor("123456789");
      envio.ingresarCedulaReceptor("987654321");
      envio.ingresarFecha("10/04/2021");
      envio.ingresarTipo("PAQUETE");
      /*
      envio.ingresarTipo().then(()=>{
        element.all(by.css('.mat-option')).get(0).click();
      });*/
      envio.ingresarPeso(10.5);
      envio.ingresarValor(26500);



      //await envio.clickBotonFormularioCrearEnvio();

      await envio.clickBotonListarEnvios();
      let enviosFinales = await envio.contarEnvios();
      await browser.sleep(5000);
      expect(enviosFinales).toEqual(enviosIniciales + 1);
    });

    it('Deberia actualizar envio', () => {
      page.navigateTo();
      toolbar.clickBotonEnvio();
      envio.clickBotonListarEnvios();
      envio.clickBotonActualizarEnvio();

    });

});
