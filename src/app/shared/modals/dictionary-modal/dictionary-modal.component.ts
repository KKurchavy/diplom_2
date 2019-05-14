import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DictionaryModel } from '../../../models/dictionary.models';

@Component({
  selector: 'app-dictionary-modal',
  templateUrl: './dictionary-modal.component.html',
  styleUrls: ['./dictionary-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DictionaryModalComponent implements OnInit {
  public newDictionary: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DictionaryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DictionaryModel
  ) { }

  public ngOnInit(): void {
    this.initForm();
    this.initFormData();
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  public onSave(): void {
    this.dialogRef.close(this.newDictionary.value);
  }

  private initForm(): void {
    this.newDictionary = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      avatarUrl: [''],
    });
  }

  private initFormData(): void {
    if (!this.data) return;
    this.newDictionary.patchValue(this.data);
  }
}
