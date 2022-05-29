import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { ChildrenOutletContexts } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataShareComponent } from './service/data-share/data-share.component';
// @ts-ignore
import AOS from "aos";
const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    query(':enter', [style({ opacity: 0 })], {
      optional: true,
    }),
    query(
      ':leave',
      [
        style({ opacity: 1 }),
        animate('0.2s', style({ opacity: 0 })),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        animate('0.2s', style({ opacity: 1 })),
      ],
      { optional: true }
    ),
  ]),
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]

})
export class AppComponent implements OnInit, OnDestroy {
  title = 'input-output';
  childItem = "unique child item";
  mediaSub!: Subscription;
  isMobile?: boolean;
  isTablet?: boolean;
  constructor(private mediaObserver: MediaObserver, private dataShare: DataShareComponent, private contexts: ChildrenOutletContexts) { }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    AOS.refreshHard()
  }
  ngOnInit(): void {
    AOS.init()
    this.getCurrentDevice()
  }

  getCurrentDevice() {
    this.mediaSub = this.mediaObserver.asObservable().subscribe({
      next: (change: MediaChange[]) => {
        this.isTablet = change[0].mqAlias === 'sm' ? true : false;
        this.isMobile = change[0].mqAlias === 'xs' ? true : false;
        this.dataShare.setCurrentDevice(change[0].mqAlias);
      }
    })
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }


}
