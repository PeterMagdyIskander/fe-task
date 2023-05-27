import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-one-slot-card',
  templateUrl: './one-slot-card.component.html',
  styleUrls: ['./one-slot-card.component.scss']
})
export class OneSlotCardComponent {
  @Input() src: string="";
  @Input() title: string="";
  @Input() subtitle: string="";
  @Input() showBall: Boolean=true;
}
