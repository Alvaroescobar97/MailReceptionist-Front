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

      expect(envio.contarEnvios()).toBe(8);
    });

    it('Deberia crear envio', () => {
      page.navigateTo();
      toolbar.clickBotonEnvio();
      envio.clickBotonCrearEnvio();


    });

    it('Deberia actualizar envio', () => {
      page.navigateTo();
      toolbar.clickBotonEnvio();
      envio.clickBotonListarEnvios();
      envio.clickBotonActualizarEnvio();

    });

});
