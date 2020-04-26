import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterailsComponent } from './materails.component';

describe('MaterailsComponent', () => {
  let component: MaterailsComponent;
  let fixture: ComponentFixture<MaterailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
