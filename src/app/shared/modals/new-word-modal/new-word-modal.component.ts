import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-word-modal',
  templateUrl: './new-word-modal.component.html',
  styleUrls: ['./new-word-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewWordModalComponent implements OnInit {
  public newWord: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewWordModalComponent>,
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  public onSave(): void {
    this.dialogRef.close(this.newWord.value);
  }

  private initForm(): void {
    this.newWord = this.fb.group({
      word: ['', Validators.required],
      translation: ['', Validators.required],
    });
  }
}
