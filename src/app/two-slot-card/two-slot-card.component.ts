import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-two-slot-card',
  templateUrl: './two-slot-card.component.html',
  styleUrls: ['./two-slot-card.component.scss']
})
export class TwoSlotCardComponent {
  @Input() src: string="";
  @Input() title: string="";
  @Input() subtitle: string="";
}
