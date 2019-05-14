import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDictionaryModalComponent } from './edit-dictionary-modal.component';

describe('EditDictionaryModalComponent', () => {
  let component: EditDictionaryModalComponent;
  let fixture: ComponentFixture<EditDictionaryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDictionaryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDictionaryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
