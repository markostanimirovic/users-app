import { Component, inject, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { User } from '../user.model';
import { UsersService } from '../users.service';
import { UserListComponent } from '../components/user-list.component';
import { SearchBoxComponent } from '../../shared/search-box.component';

@Component({
  standalone: true,
  imports: [NgIf, UserListComponent, SearchBoxComponent],
  template: `
    <h1>Users</h1>

    <app-search-box (queryChange)="onQueryChange($event)" />

    <p *ngIf="isLoading">Loading...</p>
    <app-user-list [users]="filteredUsers" />
  `,
})
export class UsersComponent implements OnInit {
  private usersService = inject(UsersService);

  users: User[] = [];
  filteredUsers: User[] = [];
  isLoading = true;

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
