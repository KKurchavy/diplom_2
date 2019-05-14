import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryModalComponent } from './dictionary-modal/dictionary-modal.component';
import { UserModalComponent } from './user-modal/user-modal.component';
import { EditDictionaryModalComponent } from './edit-dictionary-modal/edit-dictionary-modal.component';
import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { NewWordModalComponent } from './new-word-modal/new-word-modal.component';

@NgModule({
  declarations: [
    DictionaryModalComponent,
    UserModalComponent,
    EditDictionaryModalComponent,
    EditUserModalComponent,
    ConfirmDialogComponent,
    NewWordModalComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
  ],
  entryComponents: [
    DictionaryModalComponent,
    UserModalComponent,
    EditDictionaryModalComponent,
    EditUserModalComponent,
    ConfirmDialogComponent,
    NewWordModalComponent
  ],
})
export class ModalsModule { }
