import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-opc-entrar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './opc-entrar.component.html',
  styleUrl: './opc-entrar.component.css'
})
export class OpcEntrarComponent {
  imagemFundo: string = '../../../../assets/astroLog.png';
}
