import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Resume';
  name = 'Sean Blessing';
  address = '1111 Test Street';
  phone = '513-222-3333';
  email = 'sean@test.com';
  displayWork = true;
  displayEdu = true;
}
