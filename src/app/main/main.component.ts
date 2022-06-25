import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  baseRiceCups = 1
  baseWaterCups = 2;

  actualRiceCups = 1.5;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  onWaterCupsChange(newValue: number) {
    this.baseWaterCups = newValue;
  }

  onRiceCupsChange(newValue: number) {
    this.actualRiceCups = newValue;
  }

  onBasicRiceCupsChange(newValue: number) {
    this.baseRiceCups = newValue;
  }
}
