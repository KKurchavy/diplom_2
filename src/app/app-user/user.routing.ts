import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCoreComponent } from './components/user-core/user-core.component';
import { UserDictionariesComponent } from './components/user-dictionaries/user-dictionaries.component';
import { UserResultsComponent } from './components/user-results/user-results.component';
import { TestWrapperComponent } from './components/user-test/components/test-wrapper/test-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: UserCoreComponent,
    children: [
      { path: 'test', loadChildren: './components/user-test/user-test.module#UserTestModule', },
      { path: 'dictionaries', component: UserDictionariesComponent },
      { path: 'results', component: UserResultsComponent },
      { path: '', redirectTo: 'dictionaries' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
