import { MiscPagesModule } from './misc-pages.module';

describe('MiscPagesModule', () => {
  let miscPagesModule: MiscPagesModule;

  beforeEach(() => {
    miscPagesModule = new MiscPagesModule();
  });

  it('should create an instance', () => {
    expect(miscPagesModule).toBeTruthy();
  });
});
