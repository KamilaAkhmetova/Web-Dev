import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  template: ` Username: {{ username }} `,
})
export class User {
  username = 'youngTech';
}

@Component({
  selector: 'app-composition',
  standalone:true,
  template: `
  <section>
    <app-user></app-user>
  </section>`,
  imports: [User],
})
export class Composition {}