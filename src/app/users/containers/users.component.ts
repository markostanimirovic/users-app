import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <h1>Users</h1>

    <input
      type="text"
      placeholder="Search..."
      [ngModel]="query"
      (ngModelChange)="onQueryChange($event)"
    />

    <p *ngIf="isLoading">Loading...</p>
    <ul>
      <li *ngFor="let user of filteredUsers">
        <a routerLink="/users/{{ user.id }}">
          {{ user.firstName + ' ' + user.lastName }}
        </a>
      </li>
    </ul>
  `,
})
export class UsersComponent implements OnInit {
  private usersService = inject(UsersService);

  users: User[] = [];
  filteredUsers: User[] = [];
  isLoading = true;
  query = '';

  // constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getAll().subscribe((users) => {
      this.users = users;
      this.filteredUsers = users;
      this.isLoading = false;
    });
  }

  onQueryChange(query: string): void {
    this.filteredUsers = this.users.filter((user) =>
      user.firstName.includes(query)
    );
  }
}
