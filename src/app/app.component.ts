import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  result: string = "";

  constructor(private appService: AppService) { }

  onDoSomethingSlowClicked() : void {
    this.appService.doSomethingSlow().subscribe({
      next: result => this.result = result,
      error: err => this.result = err
    });
  }

  onDoSomethingFastClicked() : void {
    this.appService.doSomethingFast().subscribe({
      next: result => this.result = result,
      error: err => this.result = err
    });
  }
}
