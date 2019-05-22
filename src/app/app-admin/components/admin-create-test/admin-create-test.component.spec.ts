import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateTestComponent } from './admin-create-test.component';

describe('AdminCreateTestComponent', () => {
  let component: AdminCreateTestComponent;
  let fixture: ComponentFixture<AdminCreateTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreateTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
