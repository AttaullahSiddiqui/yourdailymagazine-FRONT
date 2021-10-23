import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Title, Meta } from "@angular/platform-browser";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  trendingArr = [];
  featuredArr = [];
  randomProducts = [];
  isFetchingTrending = false;
  isFetchingFeatured = false;
  skipNo1 = 0;
  skipNo2 = 0;
  mobile: boolean = false;
  switch: boolean = true;
  mainObject: {} = null;
  handleActive: String = "All";
  selectCat = null;
  categoryArr = {};
  storeArray: any = null;
  catQuery: String = null;
  storeQuery: String = null;
  tagQuery: String = null;
  noFeatured: boolean = false;
  noTrending: boolean = false;
  fromPagination: boolean = false;
  myPlaceHolder1 = "Search by Category"
  myPlaceHolder2 = "Search by Brands"
  categoryFilter: String = null;
  brandFilter: String = null;
  constructor(private _dataService: DataService, private titleService: Title, private toastr: ToastrService, private metaService: Meta) { }

  ngOnInit() {
    if (window.screen.width < 450) this.mobile = true;
    this.fetchFeatured();
    // this.titleService.setTitle("Explore DIGMYCART for Whatever You Want - Wherever You Want");
    // this.metaService.updateTag({ name: 'description', content: 'From décor to apparel and healthy diet supplements. You can check out mind-blowing products at DIGMYCART and make yourself stand out from others in no time' });
    // this.metaService.updateTag({ property: 'og:description', content: 'From décor to apparel and healthy diet supplements. You can check out mind-blowing products at DIGMYCART and make yourself stand out from others in no time' });
    this._dataService.fetchAPI("/userDisplay/fetchCategories").subscribe(res => {
      if (res.data) this.categoryArr = res.data;
    })
    this._dataService.fetchAPI("/userDisplay/fetchStoreURLOnly").subscribe(res => {
      if (res.data) this.storeArray = res.data;
      else this.errorHandler(res.message)
    })
    this._dataService.fetchAPI("/userDisplay/fetchSettingsData").subscribe(res => {
      if (res.data) this.mainObject = res.data;
      else this.errorHandler(res.message)
    })
    this._dataService.fetchOnlyLimit("/userDisplay/fetchRandomProducts", 3).subscribe(res => {
      if (res.data) this.randomProducts = res.data;
      else this.errorHandler(res.message)
    })
  }
  fetchTrending() {
    this.isFetchingTrending = true;
    this._dataService.fetchAPIForProduct("/userDisplay/trendingProducts", this.catQuery, this.storeQuery, this.tagQuery, 9, this.skipNo2).subscribe(res => {
      if (res.data) {
        // this.trendingArr = { ...this.trendingArr, ...res.data };
        // this.trendingArr = this.trendingArr.concat(res.data);
        this.trendingArr = res.data;
        this.isFetchingTrending = false;
        this.noTrending = false;
        this.fromPagination = false;
        window.scrollTo(0, 0);
      }
      else {
        this.errorHandler(res.message);
        this.isFetchingTrending = false;
        if (!this.fromPagination) {
          this.trendingArr = [];
          if (!this.trendingArr.length) this.noTrending = true;
        }
        this.fromPagination = false;
        if (this.skipNo1) this.skipNo2 -= 9;
      }
    })
  }
  fetchFeatured() {
    this.isFetchingFeatured = true;
    this._dataService.fetchAPIForProduct("/userDisplay/featuredProducts", this.catQuery, this.storeQuery, this.tagQuery, 9, this.skipNo1).subscribe(res => {
      if (res.data) {
        // this.featuredArr = { ...this.featuredArr, ...res.data };
        this.featuredArr = res.data;
        this.isFetchingFeatured = false;
        this.noFeatured = false;
        window.scrollTo(0, 0);
      }
      else {
        this.errorHandler(res.message);
        this.isFetchingFeatured = false;
        if (!this.fromPagination) {
          this.featuredArr = [];
          if (!this.featuredArr.length) this.noFeatured = true;
        }
        this.fromPagination = false;
        if (this.skipNo2) this.skipNo1 -= 9;
      }
    })
  }
  loadMoreFeatured() {
    if (this.isFetchingFeatured) return;
    if (9 > this.featuredArr.length) {
      this.errorHandler("No more Featured products available");
      return;
    }
    this.skipNo1 += 9;
    this.fromPagination = true;
    this.fetchFeatured()
  }
  prevFeatured() {
    if (this.isFetchingFeatured) return;
    if (this.skipNo1) {
      this.skipNo1 -= 9;
      this.fetchFeatured()
    }
  }
  loadMoreTrending() {
    if (this.isFetchingTrending) return;
    if (9 > this.trendingArr.length) {
      this.errorHandler("No more Trending products available");
      return;
    }
    this.skipNo2 += 9;
    this.fromPagination = true;
    this.fetchTrending()
  }
  prevTrending() {
    if (this.isFetchingTrending) return;
    if (this.skipNo2) {
      this.skipNo2 -= 9;
      this.fetchTrending()
    }
  }
  errorHandler(err) {
    this.toastr.error(err, 'Error');
    window.scrollTo(0, 0);
  }
  goToLinkFeatured(link, productId, key) {
    this.featuredArr[key].clicks++;
    window.open(link, '_blank');
    this._dataService.postAPI("/userDisplay/increaseProductClicks", { id: productId }).subscribe(res => { })
  }
  goToLinkTrending(link, productId, key) {
    this.trendingArr[key].clicks++;
    window.open(link, '_blank');
    this._dataService.postAPI("/userDisplay/increaseProductClicks", { id: productId }).subscribe(res => { })
  }
  handleMainTabs(boool: boolean) {
    this.switch = boool;
    if (boool) this.fetchFeatured();
    else this.fetchTrending();
  }
  filterByCategory(catId) {
    this.resetSkips();
    catId == 'all' ? this.catQuery = null : this.catQuery = catId;
    this.fromPagination = false;
    if (this.switch) this.fetchFeatured()
    else this.fetchTrending();
  }
  filterByStore(storeId) {
    this.resetSkips();
    storeId == 'all' ? this.storeQuery = null : this.storeQuery = storeId;
    this.fromPagination = false;
    if (this.switch) this.fetchFeatured()
    else this.fetchTrending();
  }
  filterByTag(tagName) {
    this.resetSkips();
    this.handleActive = tagName;
    tagName == 'All' ? this.tagQuery = null : this.tagQuery = tagName;
    this.fromPagination = false;
    if (this.switch) this.fetchFeatured()
    else this.fetchTrending();
  }
  resetSkips() {
    this.skipNo1 = 0;
    this.skipNo2 = 0;
  }
  onSearch1($event) {
    this.myPlaceHolder1 = $event.term == '' ? 'Search by Category' : '';
  }
  onSearch2($event) {
    this.myPlaceHolder2 = $event.term == '' ? 'Search by Brands' : '';
  }
}
