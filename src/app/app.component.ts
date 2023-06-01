import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  template: `
    <app-header />

    <div class="body">
      <router-outlet />
    </div>

    <app-footer />
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
