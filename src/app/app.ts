import { Component } from '@angular/core';
import { Temp } from './temp/temp';

@Component({
  selector: 'app-root',
  imports: [Temp],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 
}
