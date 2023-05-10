import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./layout/header.component";
import { FooterComponent } from "./layout/footer.component";
import {UsersComponent} from "./users/users.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: string;
  title = 'FON';
  allUsers = ['Marko', 'Jovan', 'Ana'];

  constructor() {
    this.message = 'Hello World';
  }

  changeTitle(): void {
    this.title = 'SILAB';
  }

  updateMessage(message: string): void {
    this.message = message;
  }

  onLogUser(user: string): void {
    console.log('user clicked', user);
  }
}
