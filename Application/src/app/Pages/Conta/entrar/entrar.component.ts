import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-entrar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './entrar.component.html',
  styleUrl: './entrar.component.css'
})
export class EntrarComponent {
  imagemEntrar: string = 'assets/planetaEntrar.png ';

}
