import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ValidNumber } from '../algorithms/validations.algorithm';

export function PhoneNumberValidator(
  control: AbstractControl
): ValidationErrors | null {
  const initials = ['91', '92', '93', '94', '95'];


  const invalidNumber =
      !initials.includes(control.value.charAt(0) + control.value.charAt(1)) ||
          control.value.length != 9 || !ValidNumber(control.value);

  if (invalidNumber) return { phoneNumber: true };

  return null;
}
