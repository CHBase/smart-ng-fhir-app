import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesTableContainerComponent } from './resources-table-container.component';

describe('ResourcesTableContainerComponent', () => {
  let component: ResourcesTableContainerComponent;
  let fixture: ComponentFixture<ResourcesTableContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesTableContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
