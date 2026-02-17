import { Component } from '@angular/core';

@Component({
  selector: 'app-eventhandling',
  imports: [],
  template: `
    <section (mouseover)="showSecretMessage()">
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </section>
  `,
})
export class Eventhandling {
  message = '';

  showSecretMessage() {
    this.message = 'Way to go 🚀';
  }
}

