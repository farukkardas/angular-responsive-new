import { Component, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'app-data-share',
  templateUrl: './data-share.component.html',
  styleUrls: ['./data-share.component.css']
})

//injectable root
@Injectable({ providedIn: 'root' })

export class DataShareComponent implements OnInit {
  mainMessage = new BehaviorSubject<string>("Default initial value");
  currentMessage = this.mainMessage.asObservable()
  toggleSidenav = new BehaviorSubject<boolean>(false);
  sidenavObservable = this.toggleSidenav.asObservable()
  currentDevice = new BehaviorSubject<string>("");
  deviceObservable = this.currentDevice.asObservable()
  constructor() { }

  ngOnInit(): void {
  }

  changeData(changeValue: string): void {
    this.mainMessage.next(changeValue)
  }

  changeSidenav(changeValue: boolean): void {
    this.toggleSidenav.next(changeValue)
  }

  setCurrentDevice(device: string): void {
    this.currentDevice.next(device)
  }

}
