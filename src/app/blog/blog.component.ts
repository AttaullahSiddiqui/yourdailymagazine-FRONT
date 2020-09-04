import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  responseError = "";
  blogNode = null;
  isFetching = false;
  blogURL: string = "";
  mobile: boolean = false;
  constructor(private route: ActivatedRoute, private _dataService: DataService, private titleService: Title) { }

  ngOnInit() {
    if (window.screen.width < 400) this.mobile = true
    this.route.paramMap.subscribe(paramMap => {
      this.blogURL = paramMap.get('id');
      this.loadBlog(this.blogURL);
      this._dataService.postAPI("/userDisplay/increaseBlogViews", { id: this.blogURL }).subscribe(res => { })
    })
  }
  loadBlog(id) {
    this.isFetching = true;
    this._dataService.fetchWithQuery("/userDisplay/fetchSingleBlog", id).subscribe(res => {
      if (res.data) {
        this.blogNode = res.data['0'];
        this.titleService.setTitle(res.data['0']['title']);
        this.isFetching = false
      }
      else this.errorHandler(res.message)
    })
  }
  errorHandler(err) {
    this.isFetching = false;
    this.responseError = err;
    window.scrollTo(0, 0);
  }
  closeError() { this.responseError = "" }
}