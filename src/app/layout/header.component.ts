import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/users">Users</a></li>
    </ul>
  `,
})
export class HeaderComponent {}
