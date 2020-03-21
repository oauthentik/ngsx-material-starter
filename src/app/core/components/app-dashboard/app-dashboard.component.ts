import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
