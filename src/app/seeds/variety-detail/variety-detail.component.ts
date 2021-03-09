import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VarietyDetail } from '../models/variety-detail';

@Component({
  selector: 'app-variety-detail',
  templateUrl: './variety-detail.component.html',
  styleUrls: ['./variety-detail.component.scss'],
})
export class VarietyDetailComponent implements OnInit {
  variety$: Observable<VarietyDetail>;

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('Created - Variety Detail Component');
  }

  ngOnInit(): void {
    this.variety$ = this.route.data.pipe(map(data => data['variety']));
  }

  previous(variety: VarietyDetail) {
    this.router.navigate(['varieties', variety.seqNo - 1], {
      relativeTo: this.route.parent,
    });
  }

  next(variety: VarietyDetail) {
    this.router.navigate(['varieties', variety.seqNo + 1], {
      relativeTo: this.route.parent,
    });
  }
}
