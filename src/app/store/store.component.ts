import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  modalRef: BsModalRef;
  responseError = "";
  switch = false;
  couponsArray: {} = null;
  storePic;
  storeDetail;
  longDes;
  storeName;
  storeURL: string = "";
  storeURLToShow: string = "";
  storeId;
  storeDate;
  codeCopied = false;
  editObj;
  storeArray: [] = null;
  isBusy = false;
  mobile: boolean = false;
  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  currentDate = Date.now();
  constructor(private route: ActivatedRoute, private _dataService: DataService, private modalService: BsModalService, private titleService: Title) { }

  ngOnInit() {
    if (window.screen.width < 400) this.mobile = true
    this.route.paramMap.subscribe(paramMap => {
      this.storeURLToShow = paramMap.get('id');
      this.loadStoreData(this.storeURLToShow);
    })
  }
  openModal(template: TemplateRef<any>, couponNode) {
    this.editObj = { ...couponNode };
    window.open(this.editObj.trackingLink, '_blank');
    this.modalRef = this.modalService.show(template);
  }
  openModal2(template: TemplateRef<any>, couponNode) {
    this.codeCopied = false;
    this.editObj = { ...couponNode };
    this.modalRef = this.modalService.show(template);
    this.copyToClipBoard()

  }
  closeModal() { this.modalRef.hide() }
  copyToClipBoard() {
    const el = document.createElement('textarea');
    el.value = this.editObj.code;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    window.open(this.editObj.trackingLink, '_blank');
  }
  copyClipboardFunc() {
    this.copyToClipBoard();
    this.codeCopied = true;
  }
  loadCoupons(id) {
    if (this.isBusy) return;
    this.isBusy = true;
    this._dataService.fetchWithQuery("/userDisplay/fetchCoupons", id).subscribe(res => {
      if (res.data) {
        this.couponsArray = res.data;
        for (var i = 0; i < res.data.length; i++) {
          var orginalDate = this.couponsArray[i]['expDate'];
          var singleObj: Object = this.couponsArray[i];
          var fff = new Date(orginalDate).getTime();
          singleObj['expDate'] = fff;
          this.couponsArray[i] = singleObj;
        }
        this.isBusy = false;
      }
      else this.errorHandler(res.message)
    })
  }
  loadStoreData(id) {
    this._dataService.fetchWithQuery("/userDisplay/singleStoreData", id).subscribe(res => {
      if (res.data) {
        this.storeURL = res.data['0']['_id'];
        this.loadCoupons(this.storeURL);
        this.storePic = res.data['0']['img'];
        this.storeDetail = res.data['0']['shortDes'];
        this.longDes = res.data['0']['longDes'];
        this.storeName = res.data['0']['name'] + ' ' + res.data['0']['heading'];
        this.storeId = res.data['0']['storeURL'];
        var tempDateVar = Number(res.data['0']['CreatedAt']);
        this.storeDate = this.monthNames[new Date(tempDateVar).getMonth()] + " " + new Date(tempDateVar).getFullYear()
        this.titleService.setTitle(this.storeName);
        this.secondTabData(res.data['0']['categoryRef'][0])
      }
      else this.errorHandler(res.message)
    })
  }
  secondTabData(id) {
    this._dataService.fetchWithQuery("/userDisplay/fetchStores", id).subscribe(res => {
      if (res.data) this.storeArray = res.data;
      else {
        this.errorHandler(res.message)
      }
    })
  }
  loadAnotherStore(id) {
    this.switch = false;
    this.couponsArray = null;
    this.storeDetail = null;
    this.storeArray = null;
    this.loadCoupons(id);
    this.loadStoreData(id)
    this.secondTabData(id);
  }
  errorHandler(err) {
    this.isBusy = false;
    this.responseError = err;
    window.scrollTo(0, 0);
  }
  closeError() { this.responseError = "" }
}
