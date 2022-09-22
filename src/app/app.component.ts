import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'NeoTRAN';
  value: number = 155463;

  showName() {
    console.log(this.name);
  }
}
