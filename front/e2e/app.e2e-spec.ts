import { PizzariaPage } from './app.po';

describe('pizzaria App', () => {
  let page: PizzariaPage;

  beforeEach(() => {
    page = new PizzariaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
