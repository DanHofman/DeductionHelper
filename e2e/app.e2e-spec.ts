import { TaxHelperPage } from './app.po';

describe('tax-helper App', () => {
  let page: TaxHelperPage;

  beforeEach(() => {
    page = new TaxHelperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('TH works!');
  });
});
