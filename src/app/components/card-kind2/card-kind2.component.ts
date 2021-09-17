import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-kind2',
  templateUrl: './card-kind2.component.html',
  styleUrls: ['./card-kind2.component.scss']
})
export class CardKind2Component implements OnInit {

  @Input() public product: any;

  constructor() {
  }
  
  ngOnInit(): void {
    console.log(this.product);
  }

}
