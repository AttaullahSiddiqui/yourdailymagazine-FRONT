import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  mobile: boolean = false;
  constructor(private titleService: Title) { }
  ngOnInit() {
    this.titleService.setTitle("About");
    if (window.screen.width < 400) this.mobile = true
  }
}
