import { Component, HostListener, OnInit } from '@angular/core';
import { DataShareComponent } from 'src/app/service/data-share/data-share.component';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  isMobile?: boolean;
  isTablet?: boolean;

  constructor(private dataShare: DataShareComponent) { }

  ngOnInit(): void {
    this.getCurrentDevice()
  }
  getCurrentDevice(): void {
    this.dataShare.deviceObservable.subscribe({
      next: (data) => {
        this.isMobile = data === 'xs' ? true : false;
        if (data === 'sm' || data === 'md') {
          this.isTablet = true;
        }
        else {
          this.isTablet = false;
        }

      }
    });
  }

  scrollToDiv(el: HTMLElement) {
    el.scrollIntoView();
  }

}
