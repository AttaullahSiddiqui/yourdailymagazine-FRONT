import { BrowserModule, Title, Meta } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";

import { ToastrModule } from "ngx-toastr";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { P404Component } from "./error/404.component";
import { AppRoutingModule } from "./app.routing";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ModalModule, BsModalService } from "ngx-bootstrap/modal";
import { TabsModule } from "ngx-bootstrap/tabs";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { MenuComponent } from "./menu/menu.component";

// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppHeaderModule, AppSidebarModule } from "@coreui/angular";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: "toast-top-right",
      preventDuplicates: true,
    }),
    AngularFontAwesomeModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    AppHeaderModule,
    // AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  declarations: [AppComponent, P404Component, MenuComponent],
  providers: [
    Title,
    Meta,
    BsModalService,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
