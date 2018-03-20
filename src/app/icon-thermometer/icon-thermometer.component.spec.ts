import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconThermometerComponent } from './icon-wind.component';

describe('IconThermometerComponent', () => {
  let component: IconThermometerComponent;
  let fixture: ComponentFixture<IconThermometerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconThermometerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconThermometerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
