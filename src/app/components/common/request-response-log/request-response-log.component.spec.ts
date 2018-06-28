import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestResponseLogComponent } from './request-response-log.component';

describe('RequestResponseLogComponent', () => {
  let component: RequestResponseLogComponent;
  let fixture: ComponentFixture<RequestResponseLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestResponseLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestResponseLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
