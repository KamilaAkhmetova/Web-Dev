import { Component, output } from '@angular/core';

@Component({
  selector: 'app-componentoutput',
  imports: [],
  styles: `
    .btn {
      padding: 5px;
    }
  `,
  template: ` <button class="btn" (click)="addItem()">Add Item</button> `,
})
export class Componentoutput {
  addItemEvent = output<string>();
  addItem() {
    this.addItemEvent.emit('🐢');
  }
}

