import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from './user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p *ngIf="isLoading">Loading...</p>
    <ul>
      <li *ngFor="let user of users">
        {{ user.firstName + ' ' + user.lastName }}
      </li>
    </ul>
  `,
})
export class UsersComponent implements OnInit {
  private usersService = inject(UsersService);

  users: User[] = [];
  isLoading = true;

  // constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getAll().subscribe((users) => {
      this.users = users;
      this.isLoading = false;
    });
  }
}
