import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreAccentNotificationComponent } from './core-accent-notification.component';
import { CoreButtonModule } from '@core/common-ui';

@NgModule({
  declarations: [CoreAccentNotificationComponent],
  imports: [CommonModule, CoreButtonModule],
  exports: [CoreAccentNotificationComponent],
})
export class CoreAccentNotificationsModule {}
