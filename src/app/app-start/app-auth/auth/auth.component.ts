import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public authForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AuthComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.authForm = this.fb.group({
      firstName: 'Konstantin',
      lastName: 'Kurchavy',
      groupNumber: 45,
      password: '1111',
    });
  }

  public submitData(): void {
    this.dialogRef.close(this.authForm.value);
  }

}
