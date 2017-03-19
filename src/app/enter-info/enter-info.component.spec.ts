import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterInfoComponent } from './enter-info.component';

describe('EnterInfoComponent', () => {
  let component: EnterInfoComponent;
  let fixture: ComponentFixture<EnterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
