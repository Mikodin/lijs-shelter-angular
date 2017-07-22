import { LijsShelterAngularPage } from './app.po';

describe('lijs-shelter-angular App', () => {
  let page: LijsShelterAngularPage;

  beforeEach(() => {
    page = new LijsShelterAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
