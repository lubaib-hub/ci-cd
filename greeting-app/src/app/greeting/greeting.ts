import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.html',
  styleUrls: ['./greeting.css'],
})
export class GreetingComponent {
  message: string = 'Hello, welcome to the Angular Greeting Component!';
}
