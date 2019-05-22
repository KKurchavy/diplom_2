import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTestWordsComponent } from './admin-test-words.component';

describe('AdminTestWordsComponent', () => {
  let component: AdminTestWordsComponent;
  let fixture: ComponentFixture<AdminTestWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTestWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTestWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
