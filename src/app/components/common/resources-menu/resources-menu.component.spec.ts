import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesMenuComponent } from './resources-menu.component';

describe('ResourcesMenuComponent', () => {
  let component: ResourcesMenuComponent;
  let fixture: ComponentFixture<ResourcesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
