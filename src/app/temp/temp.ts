import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { TempModelData } from '../../models/temp.model';

@Component({
  selector: 'app-temp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temp.html',
  styleUrl: './temp.scss'
})
export class Temp implements OnInit {
  private api = inject(ApiService);

  currentTemps: any[] = [];
  newTemps: TempModelData[] = [];

  ngOnInit(): void {
    this.api.$data.subscribe((t) => {
      this.currentTemps = t.filter((x) => x?.data?.pressure !== null);
      console.log('Gefilterte Daten:', this.currentTemps);

      this.newTemps = this.getFormattedData(this.currentTemps);
      this.newTemps.forEach(e => {
        console.log("ID:", e.id, "Temp:", e.data.temperature, "Humidity:", e.data.humidity);
      });
    });
  }

  private getFormattedData(entries: any[]): TempModelData[] {
    return entries.map((d) => ({
      data: {
        temperature: d.data?.temperature ?? 0,
        humidity: d.data?.humidity ?? 0
      },
      id: d.data?.id ?? 'unbekannt'
    }));
  }

  trackById(index: number, item: TempModelData): string {
    return item.id;
  }
}