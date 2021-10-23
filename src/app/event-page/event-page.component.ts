import {
  Component,
  OnInit,
  ViewEncapsulation,
  TemplateRef,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";
import { Title, Meta } from "@angular/platform-browser";
import { ToastrService } from "ngx-toastr";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-event-page",
  templateUrl: "./event-page.component.html",
  styleUrls: ["./event-page.component.scss"],
})
export class EventPageComponent implements OnInit {
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  editObj;
  codeCopied = false;
  eventTitle = "";
  dataFetched = false;
  dealsArray = [];
  hiddenInput = null;
  colorsArray = [
    "#20a8d8",
    "#4dbd74",
    "#f86c6b",
    "#ffc107",
    "#2f353a",
    "#20a8d8",
    "#4dbd74",
    "#f86c6b",
    "#ffc107",
    "#2f353a",
    "#20a8d8",
    "#4dbd74",
    "#f86c6b",
    "#ffc107",
    "#2f353a",
    "#20a8d8",
    "#4dbd74",
    "#f86c6b",
    "#ffc107",
    "#2f353a",
    "#20a8d8",
    "#4dbd74",
    "#f86c6b",
    "#ffc107",
    "#2f353a",
    "#20a8d8",
    "#4dbd74",
    "#f86c6b",
    "#ffc107",
    "#2f353a",
    "#20a8d8",
    "#4dbd74",
    "#f86c6b",
    "#ffc107",
    "#2f353a",
    "#20a8d8",
    "#4dbd74",
    "#f86c6b",
    "#ffc107",
    "#2f353a",
    "#20a8d8",
    "#4dbd74",
    "#f86c6b",
    "#ffc107",
    "#2f353a",
    "#20a8d8",
    "#4dbd74",
    "#f86c6b",
    "#ffc107",
    "#2f353a",
    "#20a8d8",
    "#4dbd74",
    "#f86c6b",
    "#ffc107",
    "#2f353a",
    "#20a8d8",
    "#4dbd74",
    "#f86c6b",
    "#ffc107",
    "#2f353a",
    "#20a8d8",
    "#4dbd74",
    "#f86c6b",
    "#ffc107",
    "#2f353a",
    "#20a8d8",
    "#4dbd74",
    "#f86c6b",
    "#ffc107",
    "#2f353a",
    "#20a8d8",
    "#4dbd74",
    "#f86c6b",
    "#ffc107",
    "#2f353a",
    "#20a8d8",
    "#4dbd74",
    "#f86c6b",
    "#ffc107",
    "#2f353a",
  ];
  web = true;
  constructor(
    private _dataService: DataService,
    private modalService: BsModalService,
    private titleService: Title,
    private metaService: Meta,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    if (window.screen.width < 450) this.web = false;
    this._dataService
      .fetchAPI("/userDisplay/fetchEventName")
      .subscribe((res) => {
        if (res.data) this.eventTitle = res.data["eventName"];
      });
    this._dataService
      .fetchOnlyLimit("/userDisplay/fetchTopDeals", 32)
      .subscribe((res) => {
        if (res.data) this.dealsArray = res.data;
        else this.errorHandler("Unable to load Deals");
        console.log(res.data);
        this.dataFetched = true;
      });
  }
  openModal(template: TemplateRef<any>, couponNode) {
    if (this.modalRef) this.modalRef.hide();
    this.editObj = { ...couponNode };
    window.open(this.editObj.trackingLink, "_blank");
    this.modalRef = this.modalService.show(template, {
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: false,
    });
  }
  openModal2(template: TemplateRef<any>, couponNode) {
    if (this.modalRef) this.modalRef.hide();
    this.codeCopied = false;
    this.editObj = { ...couponNode };
    this.modalRef = this.modalService.show(template, {
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: false,
    });
    this.copyToClipBoard();
  }
  closeModal() {
    this.modalRef.hide();
  }
  copyToClipBoard() {
    const el = document.createElement("textarea");
    el.value = this.editObj.code;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    this.codeCopied = true;
    document.body.removeChild(el);
    window.open(this.editObj.trackingLink, "_blank");
  }
  copyClipboardFunc() {
    this.copyToClipBoard();
    this.codeCopied = true;
  }
  errorHandler(err) {
    this.toastr.error(err, "Error");
    window.scrollTo(0, 0);
  }
}
