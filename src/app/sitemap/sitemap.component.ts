import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent implements OnInit {
  storesArray: any;
  blogsArray: any;
  responseError: string = "";
  queArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.fetchAPI("/userDisplay/storesForSiteMap").subscribe(res => {
      if (res.data) this.storesArray = res.data;
      else this.errorHandler(res.message)
    })
    this._dataService.fetchAPI("/userDisplay/blogsForSiteMap").subscribe(res => {
      if (res.data) this.blogsArray = res.data;
      else this.errorHandler(res.message)
    })
  }
  checkEmpty(q: string): Boolean {
    for (let value of this.storesArray) {
      if (value.name.toLowerCase().startsWith(q)) return false
    }
    return true;
  }
  errorHandler(err) { this.responseError = err }
}
