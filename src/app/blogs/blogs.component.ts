import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { DataService } from "../data.service";
import { Title, Meta } from "@angular/platform-browser";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-blogs",
  templateUrl: "./blogs.component.html",
  styleUrls: ["./blogs.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class BlogsComponent implements OnInit {
  // responseError = "";
  blogsArr = [];
  skipNo = 0;
  isFetching = false;
  limitVar: Number = 980;
  mobile: boolean = false;
  constructor(
    private _dataService: DataService,
    private titleService: Title,
    private toastr: ToastrService,
    private metaService: Meta
  ) {}

  ngOnInit() {
    if (window.screen.width < 450) this.mobile = true;
    this.fetchBlogs();
    // this.titleService.setTitle("DIGMYCART Brings Latest Trends On Your Screens");
    // this.metaService.updateTag({ name: 'description', content: "Getting your hands on the latest trends is a fundamental task to compete in the race and know what's best for you. DIGMYCART is here to update you with the newest vogue" });
    // this.metaService.updateTag({ property: 'og:description', content: "Getting your hands on the latest trends is a fundamental task to compete in the race and know what's best for you. DIGMYCART is here to update you with the newest vogue" });
    // this.metaService.updateTag({ property: 'og:title', content: 'DIGMYCART Brings Latest Trends On Your Screens' });
  }
  fetchBlogs() {
    this.isFetching = true;
    this._dataService
      .fetchAPIWithLimit("/userDisplay/fetchBlogsWithLimit", 6, "", this.skipNo)
      .subscribe((res) => {
        if (res.data) {
          // this.blogsArr = { ...this.blogsArr, ...res.data };
          // this.blogsArr = this.blogsArr.concat(res.data);
          this.blogsArr = null;
          this.blogsArr = res.data;
          console.log(this.blogsArr);
          this.isFetching = false;
          window.scrollTo(0, 0);
        } else {
          this.errorHandler(res.message);
          this.isFetching = false;
          if (this.skipNo) this.skipNo -= 6;
        }
      });
  }
  loadNext() {
    if (this.isFetching) return;
    this.skipNo += 6;
    this.fetchBlogs();
  }
  loadPrev() {
    if (!this.skipNo) {
      this.errorHandler("No more previous data exist");
      return;
    }
    if (this.isFetching) return;
    this.skipNo -= 6;
    this.fetchBlogs();
  }
  openLink(blogURL) {
    // window.open("http://localhost:4000/blog/" + blogURL, "_blank");
    window.open("https://www.yourdailymagazine.com/blog/" + blogURL, "_blank");
  }
  errorHandler(err) {
    this.toastr.error(err, "Error");
    window.scrollTo(0, 0);
  }
}
