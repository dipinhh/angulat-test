import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { DashboardFilterPipe } from '../core/Pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserListComponent, DashboardFilterPipe],
  imports: [
    CommonModule,
    UserListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserListModule { }
