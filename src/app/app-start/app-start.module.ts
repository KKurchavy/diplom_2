import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatSnackBarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from '../store/effects/auth/auth.effects';
import { authReducer } from '../store/reducers/auth/auth.reducer';
import { AppAuthAdminModule } from './app-auth-admin/app-auth-admin.module';
import { AuthAdminComponent } from './app-auth-admin/auth-admin/auth-admin.component';
import { AppAuthModule } from './app-auth/app-auth.module';
import { AuthComponent } from './app-auth/auth/auth.component';
import { StartComponent } from './start/start.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    AppAuthModule,
    AppAuthAdminModule,
    RouterModule,
    MatSnackBarModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [ StartComponent ],
  exports: [ StartComponent ],
  entryComponents: [
    AuthComponent,
    AuthAdminComponent
  ]
})
export class AppStartModule { }
