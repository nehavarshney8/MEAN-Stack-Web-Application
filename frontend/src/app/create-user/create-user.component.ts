import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  form;

  constructor(private fb: FormBuilder, private user: UserService) {
    this.form = fb.group({
      firstName: '',
      lastName: '',
      email: ['', [emailValid()]],
      password: '',
      confirmPassword: ''
    }, {validator: matchingFields('password', 'confirmPassword')});
   }

   onSubmit() {
     console.log(this.form.errors);
     // document.location.reload(true);
      this.user.register(this.form.value);
   }
}

function matchingFields(field1, field2) {
  return form => {
    if (form.controls[field1].value !== form.controls[field2].value) {
      return { mismatchedFields: true}; }
    };

  }

  // document.location.reload(true);

function emailValid() {
  return control => {
    // tslint:disable-next-line:max-line-length
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(control.value) ? null : { invalidEmail: true };
  };
}
