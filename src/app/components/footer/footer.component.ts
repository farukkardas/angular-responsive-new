import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { fromEvent, interval, switchMap } from 'rxjs';
import { LocationService } from 'src/app/service/location-service/location.service';
import { eightData, fifthData, firstData, fourthData, ninthData, secondData, seventhData, sixthData, thirdData } from './footerData';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input() isMobile?: boolean;
  @Input() isTablet?: boolean;
  firstFooterData = firstData;
  secondFooterData = secondData;
  thirdFooterData = thirdData
  fourthData = fourthData
  fifthData = fifthData
  sixthData = sixthData
  seventhData = seventhData
  eightData = eightData
  ninthData = ninthData
  currentLocation: string = "Turkey"
  accordionState: boolean = false;
  accordionState2: boolean = false;
  accordionState3: boolean = false;
  accordionState4: boolean = false;
  accordionState5: boolean = false;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.getLocation()
  }

  getLocation(): void {
    this.locationService.getCurrentLocation().subscribe({
      next: (response) => {
        this.currentLocation = response.country + "/" + response.regionName
      }, error: (error) => {
        //
      }
    })
  }
}
