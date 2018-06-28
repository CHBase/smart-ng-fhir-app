import { MiscPagesRoutingModule } from './misc-pages-routing.module';

describe('MiscPagesRoutingModule', () => {
  let miscPagesRoutingModule: MiscPagesRoutingModule;

  beforeEach(() => {
    miscPagesRoutingModule = new MiscPagesRoutingModule();
  });

  it('should create an instance', () => {
    expect(miscPagesRoutingModule).toBeTruthy();
  });
});
