import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldsBestComponent } from './worlds-best.component';

describe('WorldsBestComponent', () => {
  let component: WorldsBestComponent;
  let fixture: ComponentFixture<WorldsBestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldsBestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldsBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
