import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/containers/users.component';
import { UserEditComponent } from './users/containers/user-edit.component';

const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserEditComponent },
  { path: '**', redirectTo: '/' },
];

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideRouter(appRoutes)],
};
