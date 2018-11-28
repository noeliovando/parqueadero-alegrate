import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventolistComponent } from './eventolist.component';

describe('EventolistComponent', () => {
  let component: EventolistComponent;
  let fixture: ComponentFixture<EventolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
