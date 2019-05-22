import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTestDictionariesComponent } from './admin-test-dictionaries.component';

describe('AdminTestDictionariesComponent', () => {
  let component: AdminTestDictionariesComponent;
  let fixture: ComponentFixture<AdminTestDictionariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTestDictionariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTestDictionariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
