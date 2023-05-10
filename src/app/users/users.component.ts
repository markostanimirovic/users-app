import {Component, EventEmitter, Input, Output} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let user of users" (click)="logUser.emit(user)">
        {{ user }}
      </li>
    </ul>
  `,
})
export class UsersComponent {
  @Input() users: string[] = [];
  @Output() logUser = new EventEmitter();
}
