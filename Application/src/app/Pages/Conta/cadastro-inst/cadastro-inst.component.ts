import { CredentialsInst } from './../../../Models/credentialsInst.model';
import { UserInst } from './../../../Models/UserInst.Model';
import { Component, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../../Services/Auth/AuthService/auth.service';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-inst',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './cadastro-inst.component.html',
  styleUrl: './cadastro-inst.component.css',
  providers: [AuthService],
})

export class CadastroInstComponent {

  showPassword: boolean = false;

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  errorMessage: string | null = null;

  UserInst = new UserInst('', '', '', '');

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    console.log('Tentando fazer cadastrar com as credenciais:', this.UserInst);
    this.authService.registerInst(this.UserInst).subscribe({
      next: (response) => {
        console.log('Registrado com sucesso', response);
        this.router.navigate(['/login-inst']);
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
