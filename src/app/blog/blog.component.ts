import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";
import { Title, Meta } from "@angular/platform-browser";
import * as customBuild from "../ckEditorCustomBuild/build/ckeditor";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class BlogComponent implements OnInit {
  public Editor = customBuild;
  iFrameObj = null;
  responseError = "";
  blogNode = null;
  blogItems = null;
  isFetching = false;
  blogURL: string = "";
  mobile: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private _dataService: DataService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    if (window.screen.width < 450) this.mobile = true;
    this.route.paramMap.subscribe((paramMap) => {
      this.blogURL = paramMap.get("id");
      this.isFetching = true;
      this._dataService
        .fetchWithQuery("/userDisplay/fetchSingleBlog", this.blogURL)
        .subscribe((res) => {
          if (res.data) {
            this.titleService.setTitle(res.data["metaTitle"]);
            // document
            //   .querySelector('meta[name="description"]')
            //   .setAttribute("content", res.data["metaDes"]);
            // document
            //   .querySelector('meta[property="og:description"]')
            //   .setAttribute("content", res.data["metaDes"]);
            this.blogNode = res.data;
            this.isFetching = false;
          } else this.errorHandler(res.message);
        });
      this._dataService
        .postAPI("/userDisplay/increaseBlogViews", { id: this.blogURL })
        .subscribe((res) => {});
      this.loadBlogImages(this.blogURL);
    });
  }
  loadBlogImages(id) {
    this._dataService
      .fetchWithQuery("/userDisplay/fetchBlogItems", id)
      .subscribe((res) => {
        if (res.data) this.blogItems = res.data;
      });
  }
  loadBlog(id) {
    this.isFetching = true;
    this._dataService
      .fetchWithQuery("/userDisplay/fetchSingleBlog", id)
      .subscribe((res) => {
        if (res.data) {
          this.blogNode = res.data;
          this.titleService.setTitle(res.data["0"]["metaTitle"]);
          this.metaService.updateTag({
            name: "description",
            content: res.data["0"]["metaDes"],
          });
          this.isFetching = false;
        } else this.errorHandler(res.message);
      });
  }
  errorHandler(err) {
    this.isFetching = false;
    this.responseError = err;
    window.scrollTo(0, 0);
  }
  closeError() {
    this.responseError = "";
  }
  openLink(link) {
    window.open(link, "_blank");
  }
}
