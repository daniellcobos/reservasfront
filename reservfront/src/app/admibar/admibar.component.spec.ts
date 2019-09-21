import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmibarComponent } from './admibar.component';

describe('AdmibarComponent', () => {
  let component: AdmibarComponent;
  let fixture: ComponentFixture<AdmibarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmibarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmibarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
