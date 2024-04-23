import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { TransferService } from './transfer.service';
interface UserForm {
  key: FormControl<string>;
  workId: FormControl<string>;
  name: FormControl<string>;
  department: FormControl<string>;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
  providers: [TransferService]
})
export class FormComponent {
  get item(): TransferService {
    return this.srv;
  }
  constructor(private srv: TransferService) {
    // console.log(this.srv);
  }
  form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    url: new FormControl('', { validators: [Validators.required] }),
    owner: new FormControl(undefined, { validators: [Validators.required] }),
    approver: new FormControl('', { validators: [Validators.required] }),
    date_range: new FormControl('', { validators: [Validators.required] }),
    type: new FormControl('', { validators: [Validators.required] }),
    name2: new FormControl('', { validators: [Validators.required] }),
    summary: new FormControl('', { validators: [Validators.required] }),
    owner2: new FormControl('', { validators: [Validators.required] }),
    approver2: new FormControl('', { validators: [Validators.required] }),
    time: new FormControl('', { validators: [Validators.required] }),
    type2: new FormControl('', { validators: [Validators.required] }),
    items: new FormArray<FormGroup<UserForm>>([])
  });
  users: Array<{ value: string; label: string }> = [
    { value: 'xiao', label: '向学伟' },
    { value: 'mao', label: '戴高陆' }
  ];
  _submitForm(): void {
    this.formValidity(this.form.controls);
    if (this.form.invalid) {
      return;
    }
  }
  private formValidity(controls: NzSafeAny): void {
    Object.keys(controls).forEach(key => {
      const control = (controls as NzSafeAny)[key] as AbstractControl;
      control.markAsDirty();
      control.updateValueAndValidity();
    });
  }
}
