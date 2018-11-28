import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaVehiculoComponent } from './entrada-vehiculo.component';

describe('EntradaVehiculoComponent', () => {
  let component: EntradaVehiculoComponent;
  let fixture: ComponentFixture<EntradaVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradaVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
