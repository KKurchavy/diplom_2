import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-admin',
  templateUrl: './auth-admin.component.html',
  styleUrls: ['./auth-admin.component.scss']
})
export class AuthAdminComponent implements OnInit {
  public authForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AuthAdminComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.authForm = this.fb.group({
      firstName: 'lingvo',
      lastName: 'admin',
      password: 'devvsu2019'
    })
  }

  public submitData(): void {
    this.dialogRef.close(this.authForm.value);
  }

}
