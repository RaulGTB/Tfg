import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service'; // ajusta la ruta si es necesario
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  errorMsg = '';
  successMsg = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      usernameOrEmail: ['', Validators.required], // aquí cambié email por usernameOrEmail
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.errorMsg = '';
    this.successMsg = '';

    if (this.loginForm.invalid) {
      return;
    }

    const { usernameOrEmail, password } = this.loginForm.value;

    this.authService.login({ usernameOrEmail, password }).subscribe({
     next: (res) => {
  localStorage.setItem('token', res.token); // ✅ Guarda el token correctamente
  this.successMsg = 'Has iniciado sesión correctamente.';
  this.loginForm.reset();
  this.submitted = false;
  this.router.navigate(['/home']);
}
,
      error: (err) => {
        this.errorMsg = err?.error?.message || 'Error al iniciar sesión.';
      }
    });
  }
}
