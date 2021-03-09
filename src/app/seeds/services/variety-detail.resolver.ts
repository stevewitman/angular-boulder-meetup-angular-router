import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { VarietyDetail } from "../models/variety-detail";
import { SeedsService } from "./seeds.service";

@Injectable()
export class VarietyDetailResolver implements Resolve<VarietyDetail> {

  constructor(private seedsService: SeedsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<VarietyDetail> {

    const categoryUrl = route.parent.paramMap.get('categoryUrl');
    const varietySeqNo = route.paramMap.get('varietySeqNo');

    return this.seedsService.loadVarietyDetail(categoryUrl, varietySeqNo);
    
  }

}