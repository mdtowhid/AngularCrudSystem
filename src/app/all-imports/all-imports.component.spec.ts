import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllImportsComponent } from './all-imports.component';

describe('AllImportsComponent', () => {
  let component: AllImportsComponent;
  let fixture: ComponentFixture<AllImportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllImportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllImportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
