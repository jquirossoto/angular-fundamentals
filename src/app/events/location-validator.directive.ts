import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[validateLocation]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: LocationValidatorDirective,
    multi: true
  }]
})
export class LocationValidatorDirective implements Validator {

  constructor() { }

  validate(formGroup: FormGroup): {[key: string]: any} {
    let address = formGroup.controls['address'];
    let city = formGroup.controls['city'];
    let country = formGroup.controls['country'];
    let onlineUrl = (<FormGroup>formGroup.root).controls['onlineUrl'];
    let result: any;
    if((address && address.value && city && city.value && country && country.value) || (onlineUrl && onlineUrl.value)) {
      result = null
    } else {
      result = {validateLocation: false}
    }
    return result;
  }

}
