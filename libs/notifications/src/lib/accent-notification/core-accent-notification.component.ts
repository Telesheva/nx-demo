import { Component, Input } from '@angular/core';

export interface CoreAnnouncement {
  type: CoreAnnouncementType;
  message: string;
}

export enum CoreAnnouncementType {
  SUCCESS = 'success',
  ERROR = 'error',
}

@Component({
  selector: 'core-accent-notification',
  templateUrl: './core-accent-notification.component.html',
  styleUrls: ['./core-accent-notification.component.scss'],
})
export class CoreAccentNotificationComponent {
  @Input() config: CoreAnnouncement;

  baseClass: string = 'notification';

  get type(): string {
    return this.config.type;
  }

  get message(): string {
    return this.config.message;
  }

  get customTypeClass(): string {
    return `${this.baseClass}--${this.type}`;
  }
}
