import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import businessList from './json/business-list.json';
import { Business } from '@data/schema/business';

@Injectable({
  providedIn: 'root'
})
export class JsonApiService {

  getBusinessList(): Observable<Business[]> {
    return of(businessList);
  }
}