import { NgSandboxPage } from './app.po';

describe('ng-sandbox App', () => {
  let page: NgSandboxPage;

  beforeEach(() => {
    page = new NgSandboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
