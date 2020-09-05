import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateUserRoutingModule } from './create-user-routing.module';
import { CreateUserComponent } from './create-user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule, MatInputModule } from '@angular/material';
@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    CommonModule,
    CreateUserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatRadioModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [MatNativeDateModule]
})
export class CreateUserModule { }
