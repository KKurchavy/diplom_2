import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestWrapperComponent } from './components/test-wrapper/test-wrapper.component';
import { DictionariesComponent } from './components/dictionaries/dictionaries.component';
import { WordsComponent } from './components/words/words.component';
import { TestComponent } from './components/test/test.component';
import { TestEngRusComponent } from './components/test-eng-rus/test-eng-rus.component';
import { TestRusEngComponent } from './components/test-rus-eng/test-rus-eng.component';

const routes: Routes = [
  {
    path: '',
    component: TestWrapperComponent,
    children: [
      { path: 'eng-rus', component: TestEngRusComponent, children: [
        { path: 'step-1', component: DictionariesComponent },
        { path: 'step-2', component: WordsComponent },
        { path: 'step-3', component: TestComponent },
        { path: '', redirectTo: 'step-1' },
      ] },
      { path: 'rus-eng', component: TestRusEngComponent, children: [
        { path: 'step-1', component: DictionariesComponent },
        { path: 'step-2', component: WordsComponent },
        { path: 'step-3', component: TestComponent },
        { path: '', redirectTo: 'step-1' },
      ] },
      { path: '', redirectTo: 'eng-rus' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTestRoutingModule { }
