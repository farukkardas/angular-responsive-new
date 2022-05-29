import { Component, Input, OnInit } from '@angular/core';
import { DataShareComponent } from '../../service/data-share/data-share.component';
import { routeData } from 'src/app/components/header/routeData';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isMobile?: boolean;
  @Input() isTablet?: boolean;
  isOpened: boolean = false;
  activeRoute: string = ""
  routes = routeData;
  constructor(private dataService: DataShareComponent, private router: Router) { }

  ngOnInit(): void {
    this.getCurrentRoute()
  }

  getCurrentRoute() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isOpened = false
        if (this.activeRoute === "/") {
          this.activeRoute = "Home"
          return;
        }
        this.activeRoute = this.activeRoute.slice(1, this.activeRoute.length)
      }
    }
    );
  }

  toggleSidenav(): void {
    this.dataService.changeSidenav(true)
    this.isOpened = !this.isOpened
  }

  getActiveRoute() {
    console.log(this.router.getCurrentNavigation())
  }
}
