import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';
import { VirtualTimeScheduler } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bootstrap Inc.';

  topics = ['Angular', 'React', 'Vue'];
  topicHasError=true;

  userModel = new User('Rob', 'rob@test.com',1182184321,'default','morning',true);

  constructor(private _enrollmentService : EnrollmentService) {

  }

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false ;
    }
  }

  onSubmit() {
    console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel).subscribe(data => console.log('success', data),
    error => console.error('Error !', error));
    
  }
}
