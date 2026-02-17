import { Component } from '@angular/core';

@Component({
  selector: 'app-ifcontrol',
  imports: [],
  template: ` 
    @if (isServerRunning){
      <span>Yes, the server is running</span> 
    } @else{
      <span>No, the server is not running</span>
    }
  `,
})
export class Ifcontrol {
  isServerRunning = true;
}

