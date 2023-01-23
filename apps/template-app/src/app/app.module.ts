import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreAccentNotificationsModule } from '@core/notifications';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, CoreAccentNotificationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
