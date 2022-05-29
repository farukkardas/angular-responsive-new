import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { routeData } from 'src/app/components/header/routeData';
import { Router } from '@angular/router';
import { DataShareComponent } from 'src/app/service/data-share/data-share.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('drawer') sidenav?: MatDrawer;
  constructor(private router: Router, private dataService: DataShareComponent) { }
  data = routeData
  ngOnInit(): void {
    this.toggleSidenav()
  }

  toggleSidenav(): void {
    this.dataService.sidenavObservable.subscribe((response) => this.sidenav?.toggle())
  }

  changeRoute(routeName: string): void {
    this.sidenav?.close()
    this.router.navigate([routeName])
  }

}
