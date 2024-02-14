import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PasswordInputComponent} from "./components/password-input/password-input.component";



@NgModule({
  declarations: [
    PasswordInputComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class FormControlsModule {}
