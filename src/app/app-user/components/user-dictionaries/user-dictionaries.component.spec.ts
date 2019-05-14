import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDictionariesComponent } from './user-dictionaries.component';

describe('UserDictionariesComponent', () => {
  let component: UserDictionariesComponent;
  let fixture: ComponentFixture<UserDictionariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDictionariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDictionariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
