import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bootstrap Inc.';

  topics = ['Angular', 'React', 'Vue'];

  userModel = new User('Rob', 'rob@test.com',118218,'','morning',true);
}
