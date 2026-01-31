import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingComponent } from './greeting/greeting';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GreetingComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('greeting-app');
}
