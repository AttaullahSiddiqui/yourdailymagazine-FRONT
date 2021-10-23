import { Routes } from "@angular/router";
import { AuthService } from "../services/auth-service.service";

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
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { EventPageComponent } from "../event-page/event-page.component";
import { SitemapComponent } from "../sitemap/sitemap.component";

export const MenuRoutes: Routes = [
  { path: "home", component: HomeComponent, canActivate: [AuthService] },
  { path: "about", component: AboutComponent, canActivate: [AuthService] },
  { path: "privacy", component: PrivacyComponent, canActivate: [AuthService] },
  {
    path: "termsandconditions",
    component: TermsComponent,
    canActivate: [AuthService],
  },
  {
    path: "categories",
    component: CategoriesComponent,
    canActivate: [AuthService],
  },
  { path: "stores", component: StoresComponent, canActivate: [AuthService] },
  { path: "blogs", component: BlogsComponent, canActivate: [AuthService] },
  {
    path: "products",
    component: ProductsComponent,
    canActivate: [AuthService],
  },
  {
    path: "products",
    component: ProductsComponent,
    canActivate: [AuthService],
  },
  {
    path: "productdetail/:id",
    component: ProductDetailComponent,
    canActivate: [AuthService],
  },
  {
    path: "category/:id",
    component: CategoryComponent,
    canActivate: [AuthService],
  },
  { path: "store/:id", component: StoreComponent, canActivate: [AuthService] },
  {
    path: "store/:id/:tab",
    component: StoreComponent,
    canActivate: [AuthService],
  },
  { path: "blog/:id", component: BlogComponent, canActivate: [AuthService] },
  { path: "event", component: EventPageComponent, canActivate: [AuthService] },
  { path: "sitemap", component: SitemapComponent, canActivate: [AuthService] },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
];
