import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserControlDragComponent } from './user-control-drag.component';

describe('UserControlDragComponent', () => {
  let component: UserControlDragComponent;
  let fixture: ComponentFixture<UserControlDragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserControlDragComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserControlDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
