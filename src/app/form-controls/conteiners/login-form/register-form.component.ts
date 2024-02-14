import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PASSWORD_MIN_LENGTH, TransformToTypedForm} from "../../symbols";

interface LoginFormModel {
  email: string;
  password: string;
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  protected readonly formLabels: {[K in keyof LoginFormModel]: string} = {
    email: 'Email',
    password: 'Password',
  };

  protected readonly formControlNames: {[K in keyof LoginFormModel]: string} = {
    email: 'email',
    password: 'password',
  };

  protected readonly formPlaceholders: {[K in keyof LoginFormModel]: string} = {
    email: 'Enter email...',
    password: 'Enter password...',
  }

  protected readonly form = new FormGroup<TransformToTypedForm<LoginFormModel>>({
    email: new FormControl<LoginFormModel['email']>('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl<LoginFormModel['password']>('', [
      Validators.required,
      Validators.minLength(PASSWORD_MIN_LENGTH)
    ])
  })

  public onSubmit(): void {
    window.alert(
      this.form.valid ? `Email: ${this.form.value.email}; Password: ${this.form.value.password};` : 'Form is invalid'
    );
  }
}
