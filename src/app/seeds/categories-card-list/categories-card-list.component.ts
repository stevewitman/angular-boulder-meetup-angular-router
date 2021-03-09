import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-card-list',
  templateUrl: './categories-card-list.component.html',
  styleUrls: ['./categories-card-list.component.scss'],
})
export class CategoriesCardListComponent implements OnInit {

  @Input() categories: any;
  
  constructor() {}

  ngOnInit(): void {}
}
