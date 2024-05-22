import { Component, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../../Services/Auth/AuthService/auth.service';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { UserPais } from '../../../Models/UserPais.model';


@Component({
  selector: 'app-cadastro-pais',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, CommonModule],
  templateUrl: './cadastro-pais.component.html',
  styleUrl: './cadastro-pais.component.css',
  providers: [AuthService],
})

export class CadastroPaisComponent {
  showPassword: boolean = false;
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  UserPais = new UserPais('', '', '');
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.registerPais(this.UserPais).subscribe({
      next: (response) => {
        console.log('Registrado com sucesso', response);
        this.router.navigate(['/login-pais']);
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 400 && error.error.errors) {
          const validationErrors = error.error.errors;
          if (validationErrors.Senha) {
            this.errorMessage = 'Erro na senha: ' + validationErrors.Senha.join(', ');
          } else {
            this.errorMessage = 'Falha no registro: ' + error.message;
          }
        } else {
          this.errorMessage = 'Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.';
        }
        console.log('Não foi possível realizar o cadastro', error);
      }
    });
  }
}

