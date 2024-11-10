import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {SweetAlertService} from "../../services/sweet-alert.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private swal: SweetAlertService) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10,15}$/)]]
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.value).subscribe(
        {
          next: (res: any) => {
             this.swal.successNotification("Sign Up", "Signed up succesfully")
            setTimeout(() => {
              this.router.navigateByUrl('/home');
            }, 1000);
          },
          error: err => {
             this.swal.failNotification("Sign Up", "User is already registered")
          }
        }
      )
    }
  }
}
