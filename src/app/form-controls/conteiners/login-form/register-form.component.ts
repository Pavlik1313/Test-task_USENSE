import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TransformToTypedForm} from "../../symbols";

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

  protected errorMessages: {[K in keyof Partial<LoginFormModel>]: {[key: string]: string}} = {
    email: {
      required: "Email is required",
      email: "Email must be valid"
    },
    password: {
      pattern: "Password must contain uppercase letters"
    }
  }

  protected readonly form = new FormGroup<TransformToTypedForm<LoginFormModel>>({
    email: new FormControl<LoginFormModel['email']>('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl<LoginFormModel['password']>('', [
      Validators.pattern(/[A-Z]/) // Example of external validator
    ])
  })

  public onSubmit(): void {
    window.alert(
      this.form.valid ? `Email: ${this.form.value.email}; Password: ${this.form.value.password};` : 'Form is invalid'
    );
  }
}
