import { SnAngular2TodoAppPage } from './app.po';

describe('sn-angular2-todo-app App', function() {
  let page: SnAngular2TodoAppPage;

  beforeEach(() => {
    page = new SnAngular2TodoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
