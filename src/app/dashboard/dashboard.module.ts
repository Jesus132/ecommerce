import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProductsComponent } from 'src/app/dashboard/products/products.component';
import { CardKind1Component } from 'src/app/components/card-kind1/card-kind1.component';
import { CardKind2Component } from 'src/app/components/card-kind2/card-kind2.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    CardKind1Component,
    CardKind2Component
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule { }
