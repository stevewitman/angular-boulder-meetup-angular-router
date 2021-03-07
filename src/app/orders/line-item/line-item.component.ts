import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.scss']
})
export class LineItemComponent implements OnInit {
  @Input() item;

  constructor() { }

  ngOnInit(): void {
  }

}

    // {
    //   "variety": "",
    //   "img_thumb": "_small.jpg",
    //   "img_full": "_large.jpg",
    //   "seed_count": 0,
    //   "days_to_maturity": 0,
    //   "light": "",
    //   "description": "",
    //   "price": 2.00
    // },
