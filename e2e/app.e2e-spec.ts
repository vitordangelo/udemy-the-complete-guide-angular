import { UdemyTheCompleteGuidePage } from './app.po';

describe('udemy-the-complete-guide App', () => {
  let page: UdemyTheCompleteGuidePage;

  beforeEach(() => {
    page = new UdemyTheCompleteGuidePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
