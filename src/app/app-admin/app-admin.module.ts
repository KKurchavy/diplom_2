import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCoreComponent } from './components/admin-core/admin-core.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminDictionariesComponent } from './components/admin-dictionaries/admin-dictionaries.component';
import { AdminWordsComponent } from './components/admin-words/admin-words.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminRoutingModule } from './admin.routing';
import { RouterModule } from '@angular/router';
import {
  MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule,
  MatListModule, MatDividerModule, MatProgressSpinnerModule, MatMenuModule
} from '@angular/material';

@NgModule({
  declarations: [
    AdminCoreComponent,
    AdminSidebarComponent,
    AdminDictionariesComponent,
    AdminWordsComponent,
    AdminUsersComponent,
    AdminHeaderComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ]
})
export class AppAdminModule { }
