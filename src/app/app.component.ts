import { Component } from '@angular/core';
import { filter, interval, map } from 'rxjs';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, UsersComponent],
  template: `
    <app-header></app-header>

    <div class="body">
      <app-users></app-users>
    </div>

    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    // let count = 0;
    // setInterval(() => {
    //   count++;
    //   if (count % 2 === 0) {
    //     console.log('m')
    //   }
    // }, 2_000);

    const numbers$ = interval(2_000);
    const evenNumbers$ = numbers$.pipe(filter((i) => i % 2 === 0));
    const numbersGreaterThanTen$ = numbers$.pipe(
      map((i) => i + 1),
      filter((i) => i > 10)
    );

    evenNumbers$.subscribe((i) => console.log(i));
  }
}
