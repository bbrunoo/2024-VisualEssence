import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../Services/Auth/AuthService/auth.service';
import { CredentialsPais } from '../../../Models/credentialsPais.model';

@Component({
  selector: 'app-login-pais',
  standalone: true,
  imports: [RouterLink,RouterLinkActive, FormsModule],
  templateUrl: './login-pais.component.html',
  styleUrl: './login-pais.component.css',
  providers: [AuthService],

})
export class LoginPaisComponent {

  showPassword: boolean = false;

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  CredentialsPais: CredentialsPais = {email: '', senha: ''};

  constructor(private authService: AuthService, private router: Router) { }

  login(){
    console.log('Tentando fazer login com as credenciais:', this.CredentialsPais);
    this.authService.loginPais(this.CredentialsPais).subscribe(
      (response) => {
      console.log('Logado com sucesso', response);
      this.router.navigate(['/home']);
    }, error => {
      console.log('Não foi possivel realizar o login', error);
    });
  }
}

