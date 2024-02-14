import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {PasswordInputComponent} from "./components/password-input/password-input.component";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIcon} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatIconButton} from "@angular/material/button";
import {
  PasswordInputStrengthIndicatorComponent
} from "./components/password-input-strength-indecator/password-input-strength-indicator.component";
import {GetStrengthIndicatorColorsPipe} from "./pipes/get-strength-indicator-colors.pipe";
import {RegisterFormComponent} from "./conteiners/login-form/register-form.component";



@NgModule({
  declarations: [
    PasswordInputComponent,
    PasswordInputStrengthIndicatorComponent,
    RegisterFormComponent
  ],
  exports: [
    RegisterFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIcon,
    NgOptimizedImage,
    MatInput,
    MatIconButton,
    GetStrengthIndicatorColorsPipe,
  ]
})
export class FormControlsModule {}
