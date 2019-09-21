import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmirestauranteComponent } from './admirestaurante.component';

describe('AdmirestauranteComponent', () => {
  let component: AdmirestauranteComponent;
  let fixture: ComponentFixture<AdmirestauranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmirestauranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmirestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
