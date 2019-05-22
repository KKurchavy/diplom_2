import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminDictionariesComponent } from './components/admin-dictionaries/admin-dictionaries.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminWordsComponent } from './components/admin-words/admin-words.component';
import { AdminCoreComponent } from './components/admin-core/admin-core.component';
import { AdminTestsComponent } from './components/admin-tests/admin-tests.component';
import { AdminCreateTestComponent } from './components/admin-create-test/admin-create-test.component';

const routes: Routes = [
  {
    path: '',
    component: AdminCoreComponent,
    children: [
      { path: 'dictionaries', component: AdminDictionariesComponent },
      { path: 'users', component: AdminUsersComponent },
      { path: 'words', component: AdminWordsComponent },
      { path: 'tests', component: AdminTestsComponent },
      { path: 'create-test', component: AdminCreateTestComponent },
      { path: '', redirectTo: 'dictionaries' },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class AdminRoutingModule { }
