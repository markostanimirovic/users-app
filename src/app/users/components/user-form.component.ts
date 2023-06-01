import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="userForm">
      <div>
        <label>First Name: </label>
        <input type="text" formControlName="firstName" />
      </div>

      <div>
        <label>Last Name: </label>
        <input type="text" formControlName="lastName" />
      </div>

      <button
        type="submit"
        [disabled]="!userForm.valid || isSaving"
        (click)="onSave()"
      >
        {{ isSaving ? 'Saving...' : 'Save' }}
      </button>
    </form>
  `,
  styles: [
    `
      form > div {
        margin-bottom: 1rem;
      }
    `,
  ],
})
export class UserFormComponent {
  private userId = 0;
  userForm = new FormGroup({
    firstName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    lastName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  @Input() isSaving = false;

  @Input() set user({ id, firstName, lastName }: User) {
    this.userId = id;
    this.userForm.setValue({ firstName, lastName });
  }

  @Output() save = new EventEmitter<User>();

  onSave(): void {
    const userFormValue = this.userForm.getRawValue();
    this.save.emit({ ...userFormValue, id: this.userId });
  }
}
