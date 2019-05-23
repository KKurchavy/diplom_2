import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserControlTestsComponent } from './user-control-wrapper.component';

describe('UserControlWrapperComponent', () => {
  let component: UserControlTestsComponent;
  let fixture: ComponentFixture<UserControlTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserControlTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserControlTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
