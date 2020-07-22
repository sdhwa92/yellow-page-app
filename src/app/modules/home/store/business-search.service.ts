import { IndustryTypeEnum } from '@data/schema/industry-type.enum';
import { BusinessSearchStore } from './business-search.store';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BusinessSearchService {

  constructor(
    private businessSearchStore: BusinessSearchStore
  ) {}

  updateSearchTerm(term: string) {
    this.businessSearchStore.update({
      businessName: term
    });
  }

  updatePostcode(postcode: string) {
    this.businessSearchStore.update({
      postcode: postcode
    });
  }

  updateSelectedIndustry(selectedIndustry: IndustryTypeEnum) {
    this.businessSearchStore.update({
      industry: selectedIndustry
    });
  }
}