import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Search } from '@data/schema/search';
import { IndustryTypeEnum } from '@data/schema/industry-type.enum';

@Component({
  selector: 'app-search-business',
  templateUrl: './search-business.component.html',
  styleUrls: ['./search-business.component.scss']
})
export class SearchBusinessComponent implements OnInit {

  @Output() search:EventEmitter<Search> = new EventEmitter<Search>();

  searchForm: FormGroup;

  // Other = 0,
  // Lawyer = 100,
  // Agency = 110,
  // Doctor = 200,
  // Dentist = 201,
  // Grocery = 300,
  // Restaurant = 400,
  // Plumber = 500,
  // Electrician = 600,
  // Mechanic = 700,
  // Hairdresser = 800,
  // Builder = 900,
  // Accountant = 1000,
  // Salon = 1100,
  // Vet = 1200
  industryTypes: IndustryTypeEnum[] = [
    100,
    110,
    200,
    201,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    1000,
    1100,
    1200,
    1300,
    1
  ];

  constructor(
    private _fb: FormBuilder
  ) { }
  
  ngOnInit(): void {
    this.searchForm = this._fb.group({
      businessName: [''],
      businessPostcode: ['', Validators.pattern("^[0-9]*$")],
      businessIndustry: [null]
    });
  }

  onSubmit(form: FormGroup) {
    this.search.emit(form.value);
  }

  onReset() {
    this.searchForm.reset();
    this.searchForm.markAsPristine();
    this.searchForm.markAsUntouched();
    this.search.emit(this.searchForm.value);
  }

  get industryTypeEnum()
  {
    return IndustryTypeEnum;
  }

}
