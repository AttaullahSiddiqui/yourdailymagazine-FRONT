import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TabsModule } from "ngx-bootstrap/tabs";
import { CollapseModule } from "ngx-bootstrap/collapse";
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { MenuRoutes } from "./menu.routing";
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { PrivacyComponent } from "../privacy/privacy.component";
import { TermsComponent } from "../terms/terms.component";
import { CategoriesComponent } from "../categories/categories.component";
import { StoresComponent } from "../stores/stores.component";
import { BlogsComponent } from "../blogs/blogs.component";
import { CategoryComponent } from "../category/category.component";
import { StoreComponent } from "../store/store.component";
import { BlogComponent } from "../blog/blog.component";
import { ProductsComponent } from "../products/products.component";
import { SitemapComponent } from "../sitemap/sitemap.component";
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { EventPageComponent } from "../event-page/event-page.component";

import { OrderbyPipe } from "../orderby.pipe";
import { SortbyPipe } from "../sortby.pipe";
import { SanitizeHtmlPipe, SanitizeURLPipe } from "../sanitize-html.pipe";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MenuRoutes),
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    TabsModule,
    CollapseModule,
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    PrivacyComponent,
    TermsComponent,
    CategoriesComponent,
    StoresComponent,
    BlogsComponent,
    CategoryComponent,
    StoreComponent,
    BlogComponent,
    ProductsComponent,
    SitemapComponent,
    ProductDetailComponent,
    EventPageComponent,
    OrderbyPipe,
    SortbyPipe,
    SanitizeHtmlPipe,
    SanitizeURLPipe,
  ],
})
export class MenuModule {}
