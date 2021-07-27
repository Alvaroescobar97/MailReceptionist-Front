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
      const enviosIniciales = await envio.contarEnvios();

      envio.clickBotonCrearEnvio();

      envio.ingresarCedulaEmisor('123456789');
      envio.ingresarCedulaReceptor('987654321');
      envio.ingresarFecha('10/04/2021');
      envio.ingresarTipo('PAQUETE');
      envio.ingresarPeso(10.5);
      envio.ingresarValor(26500);

      await envio.clickBotonSubmitFormularioEnvio();

      await envio.clickBotonListarEnvios();
      const enviosFinales = await envio.contarEnvios();
      await browser.sleep(5000);
      expect(enviosFinales).toEqual(enviosIniciales + 1);
    });

    it('Deberia actualizar envio', async () => {
      page.navigateTo();
      toolbar.clickBotonEnvio();
      envio.clickBotonListarEnvios();
      const enviosIniciales = await envio.contarEnvios();
      envio.clickBotonActualizarEnvio();

      envio.limpiarFecha();
      envio.ingresarFecha('10/04/2021');
      envio.limpiarTipo();
      envio.ingresarTipo('CARTA');
      envio.limpiarPeso();
      envio.ingresarPeso(0);
      envio.limpiarValor();
      envio.ingresarValor(20500);

      await envio.clickBotonSubmitFormularioEnvio();

      await envio.clickBotonListarEnvios();
      const enviosFinales = await envio.contarEnvios();
      await browser.sleep(5000);
      expect(enviosFinales).toEqual(enviosIniciales);
    });

});
