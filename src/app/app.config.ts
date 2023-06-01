import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/containers/users.component';
import { UserEditComponent } from './users/containers/user-edit.component';

const appRoutes: Route[] = [
  { path: '', component: HomeComponent, title: 'Home' },
  {
    path: 'users',
    children: [
      { path: '', component: UsersComponent, title: 'Users' },
      { path: ':id', component: UserEditComponent, title: 'User Edit' },
    ],
  },
  { path: '**', redirectTo: '/' },
];

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideRouter(appRoutes)],
};
