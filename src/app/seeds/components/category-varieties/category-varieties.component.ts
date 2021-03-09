import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-varieties',
  templateUrl: './category-varieties.component.html',
  styleUrls: ['./category-varieties.component.scss'],
})
export class CategoryVarietiesComponent implements OnInit {

  category: Category;
  // sub: any;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.category = this.activatedRoute.snapshot.data['category'];
  }
  
}
