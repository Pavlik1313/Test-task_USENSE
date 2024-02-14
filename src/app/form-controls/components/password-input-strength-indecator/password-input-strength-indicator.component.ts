import {Component, Input} from '@angular/core';
import {PasswordStrength} from "../../symbols";

@Component({
  selector: 'app-password-input-strength-indicator',
  templateUrl: './password-input-strength-indicator.component.html',
  styleUrl: './password-input-strength-indicator.component.scss',
})
export class PasswordInputStrengthIndicatorComponent {
  @Input() strength: PasswordStrength;
}
