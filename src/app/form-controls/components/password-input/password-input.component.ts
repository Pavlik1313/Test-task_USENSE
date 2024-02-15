import {Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR, ValidationErrors,
  Validator,
  Validators
} from "@angular/forms";
import {
  containsDigitsRegex,
  containsLettersRegex,
  containsSymbolsRegex,
  PASSWORD_MIN_LENGTH,
  PasswordStrength
} from "../../symbols";
import {map, Observable, Subscription} from "rxjs";


@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    }
  ]
})
export class PasswordInputComponent implements ControlValueAccessor, Validator, OnInit, OnDestroy {
  @Input() label: string;
  @Input() placeholder: string;

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  protected isPasswordHidden = true;

  protected passwordStrength: Observable<PasswordStrength>;

  protected passwordControl = new FormControl<string>('', [
    Validators.required,
    Validators.minLength(PASSWORD_MIN_LENGTH)
  ]);

  protected errorMessages: {[key: string]: string} = {
    required: "The password is required",
    minlength: "The password must be at least 8 characters long"
  }

  private readonly subscription = new Subscription();

  constructor() {
  }

  ngOnInit(): void {
    this.subscription.add(
      this.passwordControl.valueChanges.subscribe(value => this.updateValue(value))
    );

    this.passwordStrength = this.passwordControl.valueChanges.pipe(
      map(value => this.getPasswordStrength(value)),
    )
  }

  public writeValue(value: string): void {
    this.passwordControl.setValue(value, {emitEvent: false});
  }

  public validate(control: AbstractControl): ValidationErrors | null {
    return this.passwordControl.errors;
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private updateValue(value: string): void {
    this.onChange(value);
    this.onTouched();
  }

  private getPasswordStrength(value: string): PasswordStrength {
    if (value.length === 0) return PasswordStrength.EMPTY;

    if (value.length < PASSWORD_MIN_LENGTH) return PasswordStrength.SHORT;

    let numberOfCharacterGroups = 0;

    if(containsDigitsRegex.test(value)) numberOfCharacterGroups++;
    if(containsLettersRegex.test(value)) numberOfCharacterGroups++;
    if(containsSymbolsRegex.test(value)) numberOfCharacterGroups++;

    switch (numberOfCharacterGroups) {
      case 3: return PasswordStrength.STRONG;
      case 2: return PasswordStrength.MEDIUM;
      case 1:
      default: return PasswordStrength.EASY;
    }
  }

  public onBlur(): void {
    this.onTouched();
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
