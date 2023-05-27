import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-floating-card',
  templateUrl: './floating-card.component.html',
  styleUrls: ['./floating-card.component.scss']
})
export class FloatingCardComponent {
  @Input() title: string="";
  @Input() subtitle: string="";
  @Input() number: String="";
  @Input() top: Number=0;
  @Input() right: Number=0;
}
