import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessTokenTimerComponent } from './access-token-timer.component';

describe('AccessTokenTimerComponent', () => {
  let component: AccessTokenTimerComponent;
  let fixture: ComponentFixture<AccessTokenTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessTokenTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessTokenTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
