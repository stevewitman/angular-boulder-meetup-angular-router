import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = formBuilder.group({
      email: ['test@test.test', [Validators.required]],
      password: ['test', [Validators.required]],
    });
  }

  ngOnInit() {}

  signin() {
    const val = this.form.value;

    this.authService.signin(val.email, val.password).subscribe(
      () => {
        this.router.navigateByUrl('/home');
      },
      (err) => {
        alert('Signin failed!');
      }
    );
  }
}
