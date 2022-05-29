import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from 'src/app/model/location';
@Injectable({
  providedIn: 'root'
})
export class LocationService {
  locationApiUrl: string = "http://ip-api.com/json"

  constructor(private httpClient: HttpClient) { }

  getCurrentLocation(): Observable<Location> {
    return this.httpClient.get<Location>(this.locationApiUrl)
  }
}
