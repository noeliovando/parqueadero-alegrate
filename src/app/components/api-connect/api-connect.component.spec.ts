import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiConnectComponent } from './api-connect.component';

describe('ApiConnectComponent', () => {
  let component: ApiConnectComponent;
  let fixture: ComponentFixture<ApiConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
