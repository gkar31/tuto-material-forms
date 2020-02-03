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
  topicHasError=true;

  userModel = new User('Rob', 'rob@test.com',118218,'default','morning',true);

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false ;
    }
  }
}
