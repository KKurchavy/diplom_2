import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserControlTestsComponent } from './components/user-control-tests/user-control-tests.component';
import { UserControlChooseComponent } from './components/user-control-choose/user-control-choose.component';
import { UserControlDragComponent } from './components/user-control-drag/user-control-drag.component';
import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatTabsModule } from '@angular/material';
import { UserControlTestWrapperComponent } from './components/user-control-test-wrapper/user-control-test-wrapper.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    UserControlTestsComponent,
    UserControlChooseComponent,
    UserControlDragComponent,
    UserControlTestWrapperComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    DragDropModule,
  ],
  exports: [
    UserControlTestsComponent,
    UserControlChooseComponent,
    UserControlDragComponent,
    UserControlTestWrapperComponent
  ],
})
export class UserControlModule { }
