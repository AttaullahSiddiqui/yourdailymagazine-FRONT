import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {
  mobile: boolean = false;
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Privacy");
    if (window.screen.width < 450) this.mobile = true
  }

}
