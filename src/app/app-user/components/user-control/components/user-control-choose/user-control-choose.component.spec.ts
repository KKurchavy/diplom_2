import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserControlChooseComponent } from './user-control-choose.component';

describe('UserControlChooseComponent', () => {
  let component: UserControlChooseComponent;
  let fixture: ComponentFixture<UserControlChooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserControlChooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserControlChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
