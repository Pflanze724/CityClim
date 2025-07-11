import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api = inject(HttpClient)
  private url = 'https://cors-anywhere.herokuapp.com/https://iot.skd-ka.de/api/v1/devices/c055eef5-b6dc-406e-ad5a-65dec60db90e/readings?limit=100&sort=measured_at&sort_direction=desc&auth=F20B6E04DCB4C114543B9E1BBACE3C26';
  private response: any = '';
  private _data: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public $data = this._data.asObservable();

  constructor() {
    this.getData();
  }
  public getData() {
   const headers = new HttpHeaders({
      'Content-Type': 'application/text'
    });

    this.api.get(this.url, { headers, observe: 'response' }).subscribe(
      response => {
        console.log('Headers:', response.headers);
        console.log('Body:', response.body);
        this._data.next([response.body]);
      },
      error => {
        console.error('Error fetching data:', error);
        this._data.next([]);
      }
    );
  }
}
