import { Component, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <input type="text" placeholder="Search..." [formControl]="queryControl" />
  `,
})
export class SearchBoxComponent {
  queryControl = new FormControl('', { nonNullable: true });

  @Output() queryChange = this.queryControl.valueChanges;
}
