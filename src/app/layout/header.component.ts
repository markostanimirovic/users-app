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
  styles: [
    `
      ul {
        margin: 0;
        padding: 1rem;
        background-color: rebeccapurple;
        list-style-type: none;
        display: flex;
        flex-direction: row;
        gap: 1rem;
      }

      a {
        color: white;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    `,
  ],
})
export class HeaderComponent {}
