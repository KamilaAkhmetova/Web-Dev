import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  template: ` <div [contentEditable]="isEditable"></div> `,
})
export class PropertyBinding {
  isEditable = true;
}



