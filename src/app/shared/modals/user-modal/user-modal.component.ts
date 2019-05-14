import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DictionaryModalComponent } from '../dictionary-modal/dictionary-modal.component';
import { Observable } from 'rxjs';
import { map, tap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserModalComponent implements OnInit {
  public userControl: FormGroup;
  public isStudent$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DictionaryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  public ngOnInit(): void {
    this.initForm();
    this.initFormData();
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  public onSave(): void {
    this.dialogRef.close({
      ...this.userControl.value,
      name: this.join(this.userControl.value, 'firstName', 'lastName', 'group')
    });
  }

  private initForm(): void {
    this.userControl = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      role: ['', Validators.required],
      avatarUrl: [''],
      group: [''],
    });
  }

  private initFormData(): void {
    if (this.data) {
      this.userControl.patchValue(this.data);
    }

    this.isStudent$ = this.userControl.valueChanges
      .pipe(map(({ role }) => role))
      .pipe(startWith(this.userControl.value.role))
      .pipe(map(group => group === 'student'));
  }

  private join(obj: any, ...args: string[]): string {
    return args.map((key) => obj[key]).filter(Boolean).join('-');
  }
}
