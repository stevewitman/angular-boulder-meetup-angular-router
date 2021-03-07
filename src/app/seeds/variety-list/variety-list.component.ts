import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VarietySummary } from '../models/variety-summary';

@Component({
  selector: 'app-variety-list',
  templateUrl: './variety-list.component.html',
  styleUrls: ['./variety-list.component.scss'],
})
export class VarietyListComponent implements OnInit {
  varieties: VarietySummary[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.varieties = this.route.snapshot.data['varieties'];
  }
}
