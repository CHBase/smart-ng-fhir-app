import { ResourcesRoutingModule } from './resources-routing.module';

describe('ResourcesRoutingModule', () => {
  let resourcesRoutingModule: ResourcesRoutingModule;

  beforeEach(() => {
    resourcesRoutingModule = new ResourcesRoutingModule();
  });

  it('should create an instance', () => {
    expect(resourcesRoutingModule).toBeTruthy();
  });
});
