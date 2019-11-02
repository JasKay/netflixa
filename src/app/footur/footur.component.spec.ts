import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooturComponent } from './footur.component';

describe('FooturComponent', () => {
  let component: FooturComponent;
  let fixture: ComponentFixture<FooturComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooturComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
