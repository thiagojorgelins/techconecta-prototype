import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagerService } from 'src/app/services/messager.service';
import {
  IconDefinition,
  faFolderPlus,
  faCircleExclamation,
  faChampagneGlasses,
  faKey,
  faEye,
  faEyeSlash,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerForm!: FormGroup;

  isPasswordVisible: Boolean = false;
  isConfirmPasswordVisible: Boolean = false;
  mismatchPass: Boolean = false;

  faFolderPlus: IconDefinition = faFolderPlus;
  faCircleExclamation: IconDefinition = faCircleExclamation;
  faChampagneGlasses: IconDefinition = faChampagneGlasses;
  faKey: IconDefinition = faKey;
  faEnvelope: IconDefinition = faEnvelope;
  faEye: IconDefinition = faEye;
  faEyeSlash: IconDefinition = faEyeSlash;

  constructor(
    private router: Router,
    private messagerService: MessagerService,
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(50),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      confirm_password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
    })

    this.confirm_password!.valueChanges.subscribe({
      next: (value) => {
        if (value) {
          if (value !== this.password.value) {
            this.mismatchPass = true
          } else {
            this.mismatchPass = false
          }
        }
      }
    })
  }

  get username() {
    return this.registerForm.get('username')!;
  }

  get email() {
    return this.registerForm.get('email')!;
  }

  get password() {
    return this.registerForm.get('password')!;
  }

  get confirm_password() {
    return this.registerForm.get('confirm_password')!;
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')!.value;
    const confirm_password = group.get('confirm_password')!.value;

    return password === confirm_password ? null : { notMatching: true };
  }

  submit() {
    if (this.registerForm.invalid || this.mismatchPass) {
      return
    }

    this.messagerService.addAlert({
      type: 'success',
      title: 'Registrado!',
      icon: faFolderPlus,
      message: 'Realize o seu login com sua nova conta!',
      timeout: 5000,
    })

    setTimeout(() => {
      this.router.navigate(['/login'])
    }, 500);
  }

  changePassword() {
    this.isPasswordVisible = !this.isPasswordVisible
  }

  changeConfirmPassword() {
    this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible
  }
}
