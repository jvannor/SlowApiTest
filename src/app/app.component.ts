import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  result: string = "";
  sub!: Subscription;

  constructor(private appService: AppService) { }

  onDoSomethingClicked() : void {
    this.sub = this.appService.doSomething().subscribe({
      next: result => {
        this.result = result;
      },
      error: err => this.result = err
    })
  }
}
