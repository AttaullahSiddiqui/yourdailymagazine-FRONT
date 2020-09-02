import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  responseError = "";
  categoryArr = null;
  selectCat = null;
  selectedCat: any = null;
  selectedCatURL: string = "";
  storeArr = null;
  jug = 0;
  isLoading = false;
  mobile: boolean = false;
  constructor(private _dataService: DataService, private route: ActivatedRoute, private titleService: Title) { }

  ngOnInit() {
    if (window.screen.width < 400) this.mobile = true
    var _self = this;
    this.route.paramMap.subscribe(paramMap => {
      var abc = paramMap.get('id');
      this._dataService.fetchAPI("/userDisplay/fetchCategories").subscribe(res => {
        if (res.data) {
          this.categoryArr = res.data;
          if (abc) {
            this.selectedCatURL = abc;
            this.jug = 1;
            var xyz = Object.values(this.categoryArr);
            xyz.every(function (val) {
              if (val["categoryURL"] == abc) {
                _self.loadStores(val["_id"], 2);
                return false
              }
              return true
            });
          }
        }
        else console.log(res.message)
      })
    })
  }
  secondaryFunc(abc, que?: any) {
    var _self = this;
    var xyz = Object.values(this.categoryArr);
    var xxx;
    xyz.forEach(function (val) {
      if (val["_id"] == abc) {
        xxx = val["name"];
        if (que) _self.selectedCatURL = val['categoryURL']
      }
    });
    this.selectedCat = xxx;
    this.titleService.setTitle(xxx);
  }
  loadStores(id, que?: any) {
    this.storeArr = null;
    if (this.isLoading) return;
    if (!this.jug) {
      this.jug = 1;
      return;
    }
    if (!que) this.secondaryFunc(id, 2);
    else this.secondaryFunc(id);
    this.isLoading = true;
    this._dataService.fetchWithQuery("/userDisplay/fetchStores", id).subscribe(res => {
      if (res.data) {
        this.storeArr = res.data;
        this.isLoading = false;
      } else this.errorHandler(res.message)
    })
  }
  errorHandler(err) {
    this.isLoading = false;
    this.responseError = err;
    window.scrollTo(0, 0);
  }
  closeError() { this.responseError = "" }
}
