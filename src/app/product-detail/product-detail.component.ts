import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DataService } from '../data.service';
import { Title, Meta } from "@angular/platform-browser";
import { ToastrService } from 'ngx-toastr';
declare var $: any;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  modalRef: BsModalRef;
  product: {} = null;
  isFetching: boolean = false;
  productId: String = null;
  productName: string = null;
  mobile: boolean = false;
  isSubmitingReview: boolean = false;
  randomProducts = [];
  reviewArr = [];
  reviewObj = { name: "", reviewText: "", email: "" };
  currentRate: number = 0;
  constructor(private _dataService: DataService, private titleService: Title, private toastr: ToastrService, private route: ActivatedRoute, private metaService: Meta, private modalService: BsModalService) { }

  ngOnInit() {
    if (window.screen.width < 450) this.mobile = true;
    this.route.paramMap.subscribe(paramMap => {
      this.productId = paramMap.get('id');
      this.fetchProduct(this.productId);
      this.fetchReviews()
    });
  }
  fetchProduct(productId) {
    this.isFetching = true;
    this._dataService.fetchWithQuery("/userDisplay/singleProduct", productId).subscribe(res => {
      if (res.data) {
        this.fetchRandom();
        this.product = res.data;
        this.isFetching = false;
        this.productName = res.data['name'];
        this.titleService.setTitle(res.data['metaTitle']);
        this.metaService.updateTag({ name: 'description', content: res.data['metaDes'] });
        this.metaService.updateTag({ property: 'og:description', content: res.data['metaDes'] });
      }
      else {
        this.errorHandler(res.message);
        this.isFetching = false;
      }
    })
  }
  fetchRandom() {
    this._dataService.fetchOnlyLimit("/userDisplay/fetchRandomProducts", 6).subscribe(res => {
      if (res.data) this.randomProducts = res.data;
      else this.errorHandler(res.message)
    })
  }
  errorHandler(err) {
    this.toastr.error(err, 'Error');
    window.scrollTo(0, 0);
  }
  goToAmazonFeatured(link, productId) {
    this.product['clicks']++;
    window.open(link, '_blank');
    this._dataService.postAPI("/userDisplay/increaseProductClicks", { id: productId }).subscribe(res => { })
  }
  goToAmazonTrending(link, productId) {
    this.product['clicks']++;
    window.open(link, '_blank');
    this._dataService.postAPI("/userDisplay/increaseProductClicks", { id: productId }).subscribe(res => { })
  }
  fetchReviews() {
    this._dataService.fetchWithQuery("/userDisplay/fetchReviews", this.productId).subscribe(res => {
      if (res.data) this.reviewArr = res.data;
    })
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { animated: true, keyboard: true });
  }
  submitReview(obj: any) {
    if (this.isSubmitingReview) return;
    this.isSubmitingReview = true;
    obj['productId'] = this.productId;
    obj['rating'] = this.currentRate;
    this._dataService.postAPI("/userDisplay/submitReview", obj).subscribe(res => {
      if (res.data) {
        this.reviewArr.unshift(obj);
        this.reviewObj = { name: "", reviewText: "", email: "" };
        this.currentRate = 0;
        this.toastr.success("Your Review posted successfully", 'Success');
        this.modalRef.hide();
      } else this.errorHandler(res.message)
    })
  }
}
