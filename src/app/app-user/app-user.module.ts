import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import {
  MatToolbarModule, MatIconModule, MatButtonModule, MatListModule,
  MatDividerModule, MatMenuModule, MatProgressSpinnerModule, MatSidenavModule, MatGridListModule
} from '@angular/material';
import { UserRoutingModule } from './user.routing';
import { UserCoreComponent } from './components/user-core/user-core.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { UserDictionariesComponent } from './components/user-dictionaries/user-dictionaries.component';
import { UserResultsComponent } from './components/user-results/user-results.component';
import { UserSidebarComponent } from './components/user-sidebar/user-sidebar.component';
import { UserTestModule } from './components/user-test/user-test.module';
import { testReducer } from '../store/reducers/test/test.reducer';

@NgModule({
  declarations: [
    UserCoreComponent,
    UserHeaderComponent,
    UserDictionariesComponent,
    UserResultsComponent,
    UserSidebarComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    UserTestModule,
    StoreModule.forFeature('test', testReducer),
  ]
})
export class AppUserModule { }
