import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private api = inject(ApiService)
  private data:any[] = [];
  ngOnInit(): void {
   this.api.getData();

   this.api.$data.subscribe((x) => {
    this.data = x;
   });
  }
  protected title = 'CityClim';


}
