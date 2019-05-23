import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserControlTestWrapperComponent } from './user-control-test-wrapper.component';

describe('UserControlTestWrapperComponent', () => {
  let component: UserControlTestWrapperComponent;
  let fixture: ComponentFixture<UserControlTestWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserControlTestWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserControlTestWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
