import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Business } from '../../data/schema/business';
import { JsonApiService } from '../../data/service/json-api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeResolver implements Resolve<Business[]> {
  constructor(
    private jsonApiService: JsonApiService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.jsonApiService.getBusinessList();
  }
}
