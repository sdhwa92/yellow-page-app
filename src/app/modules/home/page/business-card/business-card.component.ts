import { Component, OnInit, Input } from '@angular/core';
import { Business } from '@data/schema/business';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent implements OnInit {

  @Input() businessData: Business;

  constructor() { }

  ngOnInit(): void {
  }

}
