import { Component } from '@angular/core';
import { CoreAnnouncement, CoreAnnouncementType } from '@core/notifications';

@Component({
  selector: 'nx-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'template-app';
  notificationConfig: CoreAnnouncement = {
    type: CoreAnnouncementType.SUCCESS,
    message: 'I`m a notification from notifications library!',
  };
}
