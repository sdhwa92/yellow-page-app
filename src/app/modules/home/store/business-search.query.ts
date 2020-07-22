import { BusinessSearchModel } from './business-search.model';
import { BusinessSearchState, BusinessSearchStore } from './business-search.store';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';

@Injectable({
  providedIn: 'root'
})
export class BusinessSearchQuery extends QueryEntity<BusinessSearchState, BusinessSearchModel> {
  searchTerm$ = this.select(state => state.businessName);
  postcode$ = this.select(state => state.postcode);
  industry$ = this.select(state => state.industry);

  constructor(protected store: BusinessSearchStore) {
    super(store);
  }
}