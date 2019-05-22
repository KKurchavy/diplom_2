import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTestDictionariesComponent } from './components/admin-test-dictionaries/admin-test-dictionaries.component';
import { AdminTestWordsComponent } from './components/admin-test-words/admin-test-words.component';
import {
  MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule,
  MatListModule, MatDividerModule, MatMenuModule, MatGridListModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { AdminTestsComponent } from '../admin-tests/admin-tests.component';

@NgModule({
  declarations: [
    AdminTestDictionariesComponent,
    AdminTestWordsComponent,
    AdminTestsComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatGridListModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    AdminTestDictionariesComponent,
    AdminTestWordsComponent,
    AdminTestsComponent
  ]
})
export class AdminCreateTestModule { }
