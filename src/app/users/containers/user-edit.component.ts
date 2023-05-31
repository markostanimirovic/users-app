import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  template: ` <h1>User Edit Page: {{ id }}</h1> `,
})
export class UserEditComponent implements OnInit {
  private route = inject(ActivatedRoute);
  id: string | undefined = undefined;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }
}
