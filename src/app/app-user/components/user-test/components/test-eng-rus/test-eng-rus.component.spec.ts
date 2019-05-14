import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEngRusComponent } from './test-eng-rus.component';

describe('TestEngRusComponent', () => {
  let component: TestEngRusComponent;
  let fixture: ComponentFixture<TestEngRusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEngRusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEngRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
