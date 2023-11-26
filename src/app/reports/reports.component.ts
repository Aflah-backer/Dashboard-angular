import { Component, OnInit } from '@angular/core';
import { cardData, single, single2, averageData } from './data';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  cardData!: any[];
  single!: any[];
  single2!: any[];
  averageData!: any[];
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme: { domain: string[] } = {
    domain: ['#f6c9a2', '#b1f0b8', '#e79faa', '#e5e4ec', '#a6daf0']
  };

  constructor() {
    Object.assign(this, { cardData });
    Object.assign(this, { single });
    Object.assign(this, { single2 });
    Object.assign(this, { averageData });
  }
  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {}
}
