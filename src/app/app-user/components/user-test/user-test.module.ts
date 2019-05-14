import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule,
  MatListModule, MatDividerModule, MatMenuModule, MatGridListModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { DictionariesComponent } from './components/dictionaries/dictionaries.component';
import { WordsComponent } from './components/words/words.component';
import { TestComponent } from './components/test/test.component';
import { TestWrapperComponent } from './components/test-wrapper/test-wrapper.component';
import { UserTestRoutingModule } from './user-test.routing';
import { TestEngRusComponent } from './components/test-eng-rus/test-eng-rus.component';
import { TestRusEngComponent } from './components/test-rus-eng/test-rus-eng.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    DictionariesComponent,
    WordsComponent,
    TestComponent,
    TestWrapperComponent,
    TestEngRusComponent,
    TestRusEngComponent
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
    UserTestRoutingModule,
    DragDropModule,
  ],
  exports: [TestWrapperComponent]
})
export class UserTestModule { }
