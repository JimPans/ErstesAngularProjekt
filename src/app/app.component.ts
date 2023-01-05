import { Component } from '@angular/core';
import {Person} from "./person";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular is FUN';
  counter: number = 0;
  name : string = "Georgi";
  persons:Person[] = [
    {name:"Georgi", phone:"432"},
    {name:"Peter Lustig", phone: "4234"}
  ]

  ngOnInit() {
    setInterval(() => this.counter++, 200);
    console.log("Take that......")
  }

  resetCounter() {
    this.counter = 0;
  }
}

