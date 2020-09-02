import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {
  mobile: boolean = false;
  constructor(private titleService: Title) { }
  ngOnInit() {
    this.titleService.setTitle("Terms & Conditions");
    if (window.screen.width < 400) this.mobile = true
  }
}
