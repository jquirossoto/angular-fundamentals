import { AbstractControl, FormControl, ValidatorFn } from "@angular/forms";

export function restrictedWords (words: string[]): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    if (!words || words.length === 0) return {};
    let invalidWords = words
      .map(w => control.value.includes(w) ? w : null)
      .filter(w => w != null);
    return invalidWords && invalidWords.length > 0 ? {'restrictedWords': invalidWords.join(',  ')} : {};
  }
}
