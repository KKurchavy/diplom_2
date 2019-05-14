import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRusEngComponent } from './test-rus-eng.component';

describe('TestRusEngComponent', () => {
  let component: TestRusEngComponent;
  let fixture: ComponentFixture<TestRusEngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRusEngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRusEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
