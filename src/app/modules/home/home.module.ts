import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { HomeRoutingModule } from './home.routing';

import { HomeComponent } from './page/home.component';
import { BusinessCardComponent } from './page/business-card/business-card.component';
import { SearchBusinessComponent } from './page/search-business/search-business.component';

@NgModule({
  declarations: [
    HomeComponent, 
    BusinessCardComponent, 
    SearchBusinessComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
