import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { PaginationPageComponent } from './pagination-page/pagination-page.component';

const routes: Routes = [
{   path: 'pagination', component : PaginationPageComponent },
{  path: 'first-page', component : FirstPageComponent }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {
}
