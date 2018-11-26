import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeldaReportComponent } from './celda-report.component';

describe('CeldaReportComponent', () => {
  let component: CeldaReportComponent;
  let fixture: ComponentFixture<CeldaReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeldaReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeldaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
