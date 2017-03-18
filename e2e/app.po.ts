import { browser, element, by } from 'protractor';

export class TaxHelperPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('TH-root h1')).getText();
  }
}
