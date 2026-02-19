import { Component } from '@angular/core';

@Component({
  selector: 'app-routeuser',
  imports: [],
  standalone: true,
  template: ` <div>Username: {{ username }}</div> `,
})

export class Routeuser {
  username = 'youngTech';
}
