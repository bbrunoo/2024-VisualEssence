import { Routes, provideRouter } from '@angular/router';

import { LoginPaisComponent } from './Pages/Conta/login-pais/login-pais.component';
import { CadastroPaisComponent } from './Pages/Conta/cadastro-pais/cadastro-pais.component';

import { LoginInstComponent } from './Pages/Conta/login-inst/login-inst.component';
import { CadastroInstComponent } from './Pages/Conta/cadastro-inst/cadastro-inst.component';

import { EntrarComponent } from './Pages/Conta/entrar/entrar.component';

import { EsquecerSenhaComponent } from './Pages/Conta/esquecer-senha/esquecer-senha.component';

import { OpcEntrarComponent } from './Pages/Conta/opc-entrar/opc-entrar.component';

import { HomeComponent } from './Pages/Home/home.component';

import { ApplicationConfig } from '@angular/core';

export const routes: Routes = [
  {path: '', component: EntrarComponent},

  {path: 'login-pais', component: LoginPaisComponent},
  {path: 'cadastro-pais', component: CadastroPaisComponent},

  {path: 'login-inst', component: LoginInstComponent},
  {path: 'cadastro-inst', component: CadastroInstComponent},

  {path: 'opc-entrar', component: OpcEntrarComponent},

  {path: 'esquecer-senha', component: EsquecerSenhaComponent},

  {path: 'home', component: HomeComponent}
];
