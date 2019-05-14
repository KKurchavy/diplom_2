import { AppStartModule } from './../app-start/app-start.module';
import { StartComponent } from './../app-start/start/start.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: StartComponent },
  {
    path: 'user',
    loadChildren: '../app-user/app-user.module#AppUserModule',
  },
  {
    path: 'admin',
    loadChildren: '../app-admin/app-admin.module#AppAdminModule',
  },
];

@NgModule({
  imports: [CommonModule, AppStartModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
