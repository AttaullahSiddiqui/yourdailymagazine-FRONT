import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent implements OnInit {
  responseError = "";
  categoryArr = null;
  isLoading = false;
  mobile: boolean = false;
  constructor(
    private _dataService: DataService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    if (window.screen.width < 450) this.mobile = true;
    // this.titleService.setTitle("From Office To Home - DIGMYCART Gives You Everything ");
    // this.metaService.updateTag({ name: 'description', content: 'You can get anything on DIGMYCART from your office supplies to your bedroom makeover. Rock your professional and personal life at the same time with DIGMYCART' });
    // this.metaService.updateTag({ property: 'og:description', content: 'You can get anything on DIGMYCART from your office supplies to your bedroom makeover. Rock your professional and personal life at the same time with DIGMYCART' });
    this.isLoading = true;
    this._dataService
      .fetchAPI("/userDisplay/fetchCategories")
      .subscribe((res) => {
        if (res.data) {
          this.categoryArr = res.data;
          this.isLoading = false;
        } else this.errorHandler(res.message);
      });
  }
  errorHandler(err) {
    this.isLoading = false;
    this.responseError = err;
    window.scrollTo(0, 0);
  }
  closeError() {
    this.responseError = "";
  }
}
