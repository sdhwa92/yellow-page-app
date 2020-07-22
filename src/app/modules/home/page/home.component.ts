import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { HomeService } from './../home.service';
import { Business } from '@data/schema/business';
import { Search } from '@data/schema/search';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private _destoryed$ = new Subject();

  private _businessListData$ = new BehaviorSubject<Business[]>([]);
  businessListData$: Observable<Business[]> = this._businessListData$.asObservable();
  allBusinessList: Business[];
  businessList: Business[];

  constructor(
    private route: ActivatedRoute,
    private _homeService: HomeService
  ) { }

  ngOnInit(): void {
    let resolved: Business[] = this.route.snapshot.data.businesses;
    this.allBusinessList = resolved;

    this._businessListData$.next(resolved);
    // this.businessListData$ = this.route.data.pipe(map(data => data.businesses));

    //-- Console log data
    this._businessListData$.pipe(
      takeUntil(this._destoryed$)
    )
    .subscribe( (data) => {
      console.log('Businesses data');
      console.log(data);
      this.businessList = data;
    });
  }

  ngOnDestroy(): void {
    this._destoryed$.next();
    this._destoryed$.complete();
  }

  fetchList(search: Search): void {
    let filteredList: Business[];
    filteredList = this._homeService.SearchByFilter(search, this.allBusinessList);

    console.log('Filtered List');
    console.log(filteredList);
  
    this._businessListData$.next(filteredList);

    // if (search.businessName && !search.businessPostcode) {
    //   this._businessListData$.next(this.allBusinessList.filter(business => business.name.indexOf(search.businessName) !== -1));
    //   console.log('filter by business name');
    // }
    // else if (!search.businessName && search.businessPostcode) {
    //   this._businessListData$.next(this.allBusinessList.filter(business => business.postcode.toString() === search.businessPostcode));
    //   console.log('filter by business postcode');
    // }
    // else if (search.businessName && search.businessPostcode) {
    //   this._businessListData$.next(this.allBusinessList.filter(business => business.postcode.toString() === search.businessPostcode && business.name.indexOf(search.businessName) !== -1));
    //   console.log('filter by business name and postcode');
    // }
    // else {
    //   console.log('no filter applied');
    //   this._businessListData$.next(this.allBusinessList);
    // }
  }

}
