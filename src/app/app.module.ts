import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { PaginationPageComponent } from './pagination-page/pagination-page.component';

@NgModule({
  declarations: [AppComponent, SearchPipe, FirstPageComponent, PaginationPageComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
