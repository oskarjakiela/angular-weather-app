import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconWindComponent } from './icon-wind.component';

describe('IconWindComponent', () => {
  let component: IconWindComponent;
  let fixture: ComponentFixture<IconWindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconWindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconWindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
