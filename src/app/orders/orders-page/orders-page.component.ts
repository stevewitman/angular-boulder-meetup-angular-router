import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss'],
})
export class OrdersPageComponent implements OnInit {
  order = {
    order_number: 1001,
    date_placed: 'March 25, 2020',
    date_delivered: 'March 29, 2020',
    order_items: [
      {
        item_number: 101,
        title: 'Little Fingers Carrot',
        img_thumb: 'little_fingers_carrot_small.jpg',
        quantity: 2,
      },
      {
        item_number: 102,
        title: 'Early Cascade Tomato',
        img_thumb: 'early_cascade_tomato_small.jpg',
        quantity: 1,
      },
      {
        item_number: 103,
        title: 'Salad Bowl Lettuce Mix ',
        img_thumb: 'salad_bowl_mix_small.jpg',
        quantity: 4,
      },
      {
        item_number: 103,
        title: 'American Spinach',
        img_thumb: 'american_spinach_small.jpg',
        quantity: 4,
      },
      {
        item_number: 104,
        title: 'Keystone Giant Bell Pepper',
        img_thumb: 'keystone_giant_bell_pepper_small.jpg',
        quantity: 1,
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
