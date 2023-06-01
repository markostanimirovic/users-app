import { Component, inject, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { UserFormComponent } from '../components/user-form.component';
import { UsersService } from '../users.service';
import { User } from '../user.model';

@Component({
  standalone: true,
  imports: [NgIf, UserFormComponent],
  template: `
    <h1>Edit User</h1>

    <p *ngIf="!user">Loading...</p>
    <app-user-form
      *ngIf="user"
      [user]="user"
      [isSaving]="isSaving"
      (save)="onSave($event)"
    />
  `,
})
export class UserEditComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private usersService = inject(UsersService);

  user: User | undefined = undefined;
  isSaving = false;

  ngOnInit() {
    this.route.params
      .pipe(
        map((params) => +params['id']),
        switchMap((id) => this.usersService.getById(id))
      )
      .subscribe({
        next: (user) => (this.user = user),
        error: () => {
          alert('User is not found!');
          this.router.navigateByUrl('/users');
        },
      });
  }

  onSave(user: User): void {
    this.isSaving = true;

    this.usersService.update(user).subscribe(() => {
      this.isSaving = false;
      alert(`User ${user.firstName} ${user.lastName} is saved successfully!`);
      this.router.navigateByUrl('/users');
    });
  }
}
