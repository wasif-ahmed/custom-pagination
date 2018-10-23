import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  selector: 'app-pagination-page',
  templateUrl: './pagination-page.component.html',
  styleUrls: ['./pagination-page.component.scss']
})
export class PaginationPageComponent implements OnInit {


  title = 'data-pagination';
  tableData = [];
  pagination = {
    totalPages: 0,
    currentPage: 1,
    limit: 10,
    offset: 0,
    data: []
  };
  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getData().subscribe((data: any) => {
      this.tableData = data;
      this.changePagination(this.pagination.offset);
    });
  }

  getPaginationPages() {
    this.pagination.totalPages = Math.ceil(this.tableData.length / this.pagination.limit);
    console.log('Pagination');
    console.log(this.pagination);
    return new Array(this.pagination.totalPages);
  }

  changePagination(val) {
    this.pagination.offset = val * this.pagination.limit;
    this.pagination.data = this.tableData.slice(this.pagination.offset, this.pagination.offset + this.pagination.limit);
    this.pagination.currentPage = val;
  }
  paginationPrev() {
    if (this.pagination.currentPage > 0) {
      this.changePagination(this.pagination.currentPage - 1);
    }
  }
  paginationNext() {
    if (this.pagination.currentPage < this.pagination.totalPages - 1) {
      this.changePagination(this.pagination.currentPage + 1);
    }

  }

}
