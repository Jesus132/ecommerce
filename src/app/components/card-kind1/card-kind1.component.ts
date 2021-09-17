import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-kind1',
  templateUrl: './card-kind1.component.html',
  styleUrls: ['./card-kind1.component.scss']
})
export class CardKind1Component implements OnInit {

  @Input() public product: any;

  constructor() {
  }
  
  ngOnInit(): void {
    console.log(this.product);
  }

}
