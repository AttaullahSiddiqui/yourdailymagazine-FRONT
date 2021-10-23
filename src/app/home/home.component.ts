import {
  Component,
  HostListener,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
} from "@angular/core";
import { DataService } from "../data.service";
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Title } from "@angular/platform-browser";
// import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

// const listAnimation = trigger('listAnimation', [
//   transition('* <=> *', [
//     query(':enter',
//       [style({ opacity: 0 }), stagger('200ms', animate('900ms ease-out', style({ opacity: 1 })))],
//       { optional: true }
//     ),
//     query(':leave',
//       animate('600ms', style({ opacity: 0 })),
//       { optional: true }
//     )
//   ])
// ]);

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  // modalRef: BsModalRef;
  codeCopied = false;
  showTrusted = false;
  editObj;
  responseError = "";
  slideArray: [] = null;
  storeArray: [] = null;
  blogArray: [] = null;
  partnersImgs = [
    "../../assets/partners/admitadImg.png",
    "../../assets/partners/adpump1.png",
    "../../assets/partners/partnerizeImg.png",
    "../../assets/partners/refersion.png",
    "../../assets/partners/tubebuddy.png",
    "../../assets/partners/amazon associates.png",
    "../../assets/partners/indoleadsImg.png",
  ];
  // partnersImgs = ["../../assets/partners/amazon associates.png", "../../assets/partners/new one.png"];
  // colorsArray = ["#BF311B", "#1C2C5D", "rgb(181 59 131)", "rgb(199 60 70)", "#FFFFFF", "#00A39A", "#444444", "black"];
  dealsArray = [];
  productArray = [];
  productQuery: String = null;
  hiddenInput = null;
  isFetchingProduct: boolean = false;
  web: boolean = false;
  storeSlideSwitch = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  // @HostListener('scroll', ['$event']) private onScroll($event: Event): void {
  //   console.log("mnxmnxmnxx m,nx");
  // };

  constructor(private _dataService: DataService, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle("DigMyCart");
    if (window.screen.width < 450) this.web = false;
    else this.web = true;
    this._dataService.fetchAPI("/userDisplay/fetchSlides").subscribe((res) => {
      if (res.data) this.slideArray = res.data;
      else this.errorHandler(res.message);
    });
    this._dataService
      .fetchOnlyLimit("/userDisplay/fetchTopStores", 20)
      .subscribe((res) => {
        if (res.data) this.storeArray = res.data;
        else this.errorHandler(res.message);
      });
    this._dataService
      .fetchOnlyLimit("/userDisplay/fetchTopBlogs", 9)
      .subscribe((res) => {
        if (res.data) this.blogArray = res.data;
        else this.errorHandler(res.message);
      });
    this.fetchProducts("5e7212be3f58470017428b28");
    // this._dataService.fetchOnlyLimit("/userDisplay/fetchTopDeals", 8).subscribe(res => {
    //   if (res.data) {
    //     this.dealsArray = res.data;
    //   }
    //   else this.errorHandler(res.message)
    // })
  }
  // openModal(template: TemplateRef<any>, couponNode) {
  //   this.editObj = { ...couponNode };
  //   window.open(this.editObj.trackingLink, '_blank');
  //   this.modalRef = this.modalService.show(template);
  // }
  // openModal2(template: TemplateRef<any>, couponNode) {
  //   this.codeCopied = false;
  //   this.editObj = { ...couponNode };
  //   this.modalRef = this.modalService.show(template);
  //   this.copyToClipBoard()
  // }
  // copyToClipBoard() {
  //   const el = document.createElement('textarea');
  //   el.value = this.editObj.code;
  //   el.setAttribute('readonly', '');
  //   el.style.position = 'absolute';
  //   el.style.left = '-9999px';
  //   document.body.appendChild(el);
  //   el.select();
  //   document.execCommand('copy');
  //   this.codeCopied = true;
  //   document.body.removeChild(el);
  //   window.open(this.editObj.trackingLink, '_blank');
  // }
  // copyClipboardFunc() {
  //   this.copyToClipBoard();
  //   this.codeCopied = true;
  // }
  openLink(link) {
    window.open(link, "_blank");
  }
  fetchProducts(categoryId: String) {
    if (this.isFetchingProduct) return;
    this.isFetchingProduct = true;
    this._dataService
      .fetchWithQuery("/userDisplay/fetchProductsByCategory", categoryId)
      .subscribe((res) => {
        this.productArray = [];
        if (res.data) this.productArray = res.data;
        else this.errorHandler(res.message);
        this.isFetchingProduct = false;
      });
    this.productQuery = categoryId;
  }
  goToLinkFeatured(link, productId) {
    this._dataService
      .postAPI("/userDisplay/increaseProductClicks", { id: productId })
      .subscribe((res) => {});
    window.open(link, "_blank");
  }
  // onScroll(event): void {
  //   console.log(event);
  // }
  errorHandler(err) {
    this.responseError = "Can't load " + err + " at the moment";
  }
  closeError() {
    this.responseError = "";
  }
}
