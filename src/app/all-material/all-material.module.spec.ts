import { AllMaterialModule } from './all-material.module';

describe('AllMaterialModule', () => {
  let allMaterialModule: AllMaterialModule;

  beforeEach(() => {
    allMaterialModule = new AllMaterialModule();
  });

  it('should create an instance', () => {
    expect(allMaterialModule).toBeTruthy();
  });
});
