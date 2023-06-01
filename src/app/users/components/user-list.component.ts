import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  template: `
    <ul>
      <li *ngFor="let user of users">
        <a routerLink="/users/{{ user.id }}">
          {{ user.firstName + ' ' + user.lastName }}
        </a>
      </li>
    </ul>
  `,
})
export class UserListComponent {
  @Input() users: User[] = [];
}
