import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Anatomy } from './components/anatomy/anatomy';
import { Updating } from './components/updating/updating';
import { Composition } from './components/composition/composition';
import { Ifcontrol } from './components/ifcontrol/ifcontrol';
import { Forcontrol } from './components/forcontrol/forcontrol';
import { PropertyBinding } from './components/property-binding/property-binding';
import { Eventhandling } from './components/eventhandling/eventhandling';
import { Componentinput } from './components/componentinput/componentinput';
import { Componentoutput } from './components/componentoutput/componentoutput';
import { Deferrableviews } from './components/deferrableviews/deferrableviews';
import { Optimizingimages } from './components/optimizingimages/optimizingimages';
import { Enablingrouting } from './components/enablingrouting/enablingrouting';
// import { Routehome } from './components/routehome/routehome';
// import { Routeuser } from './components/routeuser/routeuser';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, Anatomy, Updating, Composition, Ifcontrol, Forcontrol, PropertyBinding,
    Eventhandling, Componentinput, Componentoutput, Deferrableviews, Optimizingimages,
    Enablingrouting, 
  ],
  template: `
    <app-anatomy></app-anatomy><br>
    <app-updating></app-updating><br>
    <app-composition></app-composition><br>
    <app-ifcontrol></app-ifcontrol><br>
    <app-forcontrol></app-forcontrol><br>
    <app-property-binding></app-property-binding><br>
    <app-eventhandling></app-eventhandling><br>
    <app-componentinput name="Simran"></app-componentinput><br>
    <app-componentoutput (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p><br>
    <app-deferrableviews></app-deferrableviews><br>
    <app-optimizingimages></app-optimizingimages><br>
    <app-enablingrouting></app-enablingrouting><br>
    <router-outlet></router-outlet>


  `,
})
export class App {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
  protected readonly title = signal('task1');
}
