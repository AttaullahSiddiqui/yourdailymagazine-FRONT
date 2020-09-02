import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from '../data.service';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {
  storesLimit = 20;
  responseError = "";
  storeArray: any = null;
  isLoading = true;
  mobile: boolean = false;
  scrolledNum = 0;
  constructor(private _dataService: DataService, private titleService: Title) { }

  ngOnInit() {
    if (window.screen.width < 450) this.mobile = true
    this.loadStoreCallBack();
    this.titleService.setTitle("Stores Collection");
  };
  @HostListener("window:scroll", [])
  onScroll(): void {
    if (this.scrolledNum > window.scrollY) {
      this.scrolledNum = window.scrollY;
      return;
    }
    this.scrolledNum = window.scrollY;
    let addNum = 450;
    if (this.mobile) addNum = 980
    if ((window.innerHeight + window.scrollY + addNum) >= document.body.offsetHeight) {
      this.loadMoreStores()
    }
  }
  loadStoreCallBack(abc?: string) {
    this.isLoading = true;
    this._dataService.fetchOnlyLimit("/userDisplay/fetchRandomStores", this.storesLimit).subscribe(res => {
      if (res.data) {
        if (!abc) {
          this.storeArray = res.data;
          this.storeArray = Array.from(new Set(this.storeArray));
          this.storesLimit += 20;
        }
        setTimeout(function () {
          this.isLoading = false;
          if (abc) {
            this.storeArray = res.data;
            this.storeArray = Array.from(new Set(this.storeArray));
            this.storesLimit += 20;
          }
        }.bind(this), 1000);
      }
      else this.errorHandler(res.message)
    })
  }
  loadMoreStores() {
    if (this.isLoading) return;
    this.loadStoreCallBack("abc")
  };
  errorHandler(err) {
    setTimeout(function () {
      this.isLoading = false;
    }.bind(this), 1000);
    this.responseError = err;
    window.scrollTo(0, 0);
  }
  closeError() { this.responseError = "" }
}
