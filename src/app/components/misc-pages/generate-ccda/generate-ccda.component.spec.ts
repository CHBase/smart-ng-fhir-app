import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateCcdaComponent } from './generate-ccda.component';

describe('GenerateCcdaComponent', () => {
  let component: GenerateCcdaComponent;
  let fixture: ComponentFixture<GenerateCcdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateCcdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateCcdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
