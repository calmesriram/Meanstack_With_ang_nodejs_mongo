import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasathComponent } from './prasath.component';

describe('PrasathComponent', () => {
  let component: PrasathComponent;
  let fixture: ComponentFixture<PrasathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrasathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
