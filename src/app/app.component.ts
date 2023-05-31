import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { filter, interval, map, Observable, Subject } from 'rxjs';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  template: `
    <app-header></app-header>

    <div class="body">
      <router-outlet></router-outlet>
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
    // function myInterval(time: number) {
    //   return new Observable<number>((observer) => {
    //     let count = 0;
    //
    //     setInterval(() => {
    //       observer.next(count);
    //       count++;
    //     }, time);
    //   })
    // }
    //
    // const myNumbers$ = myInterval(3000);
    //
    // const numbers$ = interval(2_000);
    // const evenNumbers$ = numbers$.pipe(filter((a) => a % 2 === 0));
    // const numbersGreaterThanTen$ = numbers$.pipe(
    //   map((i) => i + 1),
    //   filter((i) => i > 10)
    // );
    // const subscription = numbers$.subscribe((i) => console.log(i));
    // evenNumbers$.subscribe((i) => console.log(i));
    // setTimeout(() => {
    //   subscription.unsubscribe();
    // }, 3_000);
    // const customNumbers$ = new Observable<number>((observer) => {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);
    // observer.complete();
    // observer.error('greska!');
    // setTimeout(() => {
    //   observer.next(4);
    // }, 2_000);
    // });
    // customNumbers$.subscribe({
    //   next: (number) => {
    //     console.log(number);
    //   },
    //   error: (err) => {
    //     console.log('doslo je do greske');
    //     // console.error(err);
    //   },
    //   complete: () => {
    //     console.log('custom numbers observable completed');
    //   },
    // });
    //
    // customNumbers$.subscribe((number) => {
    //   console.log('drugi subscribe', number);
    // });
    // const strings$ = new Subject<string>();
    //
    // strings$.subscribe({
    //   next: (str) => console.log(str),
    //   error: () => {},
    //   complete: () => {},
    // });
    // strings$.subscribe((str) => console.log(str));
    // strings$.subscribe({
    //   next: (str) => console.log(str)
    // });
    //
    // strings$.next('str1');
    // strings$.next('str2');
  }
}
