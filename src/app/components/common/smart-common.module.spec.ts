import { SmartCommonModule } from './smart-common.module';

describe('SmartCommonModule', () => {
  let smartCommonModule: SmartCommonModule;

  beforeEach(() => {
    smartCommonModule = new SmartCommonModule();
  });

  it('should create an instance', () => {
    expect(smartCommonModule).toBeTruthy();
  });
});
