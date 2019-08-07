import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaRComponent } from './reserva-r.component';

describe('ReservaRComponent', () => {
  let component: ReservaRComponent;
  let fixture: ComponentFixture<ReservaRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
