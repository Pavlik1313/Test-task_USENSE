import {Pipe, PipeTransform} from '@angular/core';
import {IndicatorColors, PasswordStrength} from "../symbols";

@Pipe({
  name: 'getStrengthIndicatorColors',
  standalone: true
})
export class GetStrengthIndicatorColorsPipe implements PipeTransform {

  transform(strength: PasswordStrength): IndicatorColors[] {
    switch (strength) {
      case (PasswordStrength.STRONG): return [
        IndicatorColors.GREEN,
        IndicatorColors.GREEN,
        IndicatorColors.GREEN,
      ];

      case (PasswordStrength.MEDIUM): return [
        IndicatorColors.YELLOW,
        IndicatorColors.YELLOW,
        IndicatorColors.GRAY,
      ];

      case (PasswordStrength.EASY): return [
        IndicatorColors.RED,
        IndicatorColors.GRAY,
        IndicatorColors.GRAY,
      ];

      case (PasswordStrength.SHORT): return [
        IndicatorColors.RED,
        IndicatorColors.RED,
        IndicatorColors.RED,
      ];

      case (PasswordStrength.EMPTY):
      default: return [
        IndicatorColors.GRAY,
        IndicatorColors.GRAY,
        IndicatorColors.GRAY,
      ];
    }
  }

}
