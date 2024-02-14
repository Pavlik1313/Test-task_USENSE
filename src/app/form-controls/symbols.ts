import {AbstractControl} from "@angular/forms";

/** Transform interface to typed form. */
export type TransformToTypedForm<T> = {
  [K in keyof T]: AbstractControl<T[K]>;
}

export const PASSWORD_MIN_LENGTH = 8;

export enum PasswordStrength {
  EMPTY = 'empty',
  SHORT = 'short',
  EASY = 'easy',
  MEDIUM = 'medium',
  STRONG = 'strong',
}

export enum IndicatorColors {
  GRAY = 'gray',
  RED = 'red',
  YELLOW = 'yellow',
  GREEN = 'green',
}

export const containsDigitsRegex = /\d/;
export const containsLettersRegex = /[A-Za-z]/;
export const containsSymbolsRegex = /[!-\/:-@[-_]/;

