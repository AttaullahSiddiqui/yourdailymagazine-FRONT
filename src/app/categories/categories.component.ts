import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  responseError = "";
  categoryArr = null;
  isLoading = false;
  mobile: boolean = false;
  constructor(private _dataService: DataService, private titleService: Title) { }

  ngOnInit() {
    if (window.screen.width < 400) this.mobile = true
    this.titleService.setTitle("Categories");
    this.isLoading = true;
    this._dataService.fetchAPI("/userDisplay/fetchCategories").subscribe(res => {
      if (res.data) {
        this.categoryArr = res.data;
        this.isLoading = false;
      }
      else this.errorHandler(res.message)
    })
  }
  errorHandler(err) {
    this.isLoading = false;
    this.responseError = err;
    window.scrollTo(0, 0);
  }
  closeError() { this.responseError = "" }
}
