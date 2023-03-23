import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BatteryManager } from '../types/BatteryManager';
//  import batteryLevel from 'battery-level';
// import batteryLevel from 'battery-level';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  batteryLevel: number = 0;
  batteryStatus: string = '';
  batteryStatusColor: string = '';

  // ngOnInit() {
  //   window.navigator.getBattery.then((battery) => {
  //     // Update battery properties and status
  //     this.batteryLevel = Math.round(battery.level * 100);
  //     this.updateBatteryStatus(battery);

  //     // Listen for battery events
  //     battery.addEventListener('levelchange', () => {
  //       this.batteryLevel = Math.round(battery.level * 100);
  //       this.updateBatteryStatus(battery);
  //     });
  //     battery.addEventListener('chargingchange', () => {
  //       this.updateBatteryStatus(battery);
  //     });
  //   });
  //   battery$.subscribe((battery) => {
  //     this.batteryLevel = Math.round(battery.level * 100);
  //     this.updateBatteryStatus(battery);
  //     battery.addEventListener('levelchange', () => {
  //       this.batteryLevel = Math.round(battery.level * 100);
  //       this.updateBatteryStatus(battery);
  //     });
  //     battery.addEventListener('chargingchange', () => {
  //       this.updateBatteryStatus(battery);
  //     });
  //   });
  // }

  // updateBatteryStatus(battery: BatteryManager) {
  //   if (battery.charging) {
  //     this.batteryStatus = 'Charging';
  //     this.batteryStatusColor = 'text-success';
  //   } else if (battery.level <= 0.2) {
  //     this.batteryStatus = 'Low';
  //     this.batteryStatusColor = 'text-danger';
  //   } else {
  //     this.batteryStatus = 'Good';
  //     this.batteryStatusColor = 'text-primary';
  //   }
  // }


 // Get user agent information
//  const userAgent = window.navigator.userAgent;
//  const browser = this.getBrowserName(userAgent);
//  const os = this.getOSName(userAgent);
//  this.userAgentInfo = `Browser: ${browser} | OS: ${os}`;

// ngOnInit() {
//   // Get battery information
//   batteryLevel().then((level:any) => {
//     this.batteryLevel = Math.round(level * 100);
//   });
// }
// getBatteryLevel(): Observable<number> {
//   return Observable.create((observer: Observer<number>) => {
//     batteryLevel().then(level => {
//       observer.next(level);
//       observer.complete();
//     });
//   });
// }
  }




