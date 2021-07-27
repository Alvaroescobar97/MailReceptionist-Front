import { AppPage } from '../app.po';
import { ClientePage } from '../page/cliente/cliente.po';
import { ToolbarPage } from '../page/toolbar/toolbar.po';

describe('workspace-project Cliente', () => {
    let page: AppPage;
    let toolbar: ToolbarPage;
    let cliente: ClientePage;

    beforeEach(() => {
        page = new AppPage();
        toolbar = new ToolbarPage();
        cliente = new ClientePage();
    });

    it('Deberia listar clientes', () => {
      page.navigateTo();
      toolbar.clickBotonClientes();

      expect(cliente.contarClientes()).toBe(7);
    });
});
