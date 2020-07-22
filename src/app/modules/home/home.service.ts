import { IndustryTypeEnum } from '@data/schema/industry-type.enum';
import { Business } from '@data/schema/business';
import { Search } from '@data/schema/search';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  SearchByFilter(query: Search, businessList: Business[]): Business[] {
    let results: Business[];
    let filteredList: Business[] = businessList;
    let queryKey: string = null;

    console.log('Query');
    console.log(query);

    for (let key in query) {
      if (query[key]) {
        queryKey = key;
        console.log(queryKey);
      }

      if (queryKey === 'businessName') {
        filteredList = filteredList.filter(business => business.name.indexOf(query[queryKey]) !== -1 );
      }

      if (queryKey === 'businessPostcode') {
        filteredList = filteredList.filter(business => business.postcode.toString() === query[queryKey]);
      }

      if (queryKey === 'businessIndustry') {
        let enumValue: IndustryTypeEnum = (<any>IndustryTypeEnum)[query[queryKey]];
        filteredList = filteredList.filter(business => business.industryType.includes(enumValue));
      }
    }

    results = filteredList;

    return results;
  }

}