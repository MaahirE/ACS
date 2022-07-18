import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';
import { UserQuery, UserService } from './stores/user';
import { FcmService } from './services/fcm.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menu = [
    {
      title: 'Profile',
      path: '',
      icon: 'person',
    },
    {
      title: 'Settings',
      path: '',
      icon: 'settings',
    },
  ];
  constructor(
    public userQuery: UserQuery,
    private userService: UserService,
    private platform: Platform,
    private fcmService: FcmService
  ) { }

  async initApp() {
    SplashScreen.show({
      fadeInDuration: 50,
      showDuration: 3000,
      autoHide: true,
    });
    await this.platform.ready().then(() => {
      if (this.platform.is('capacitor')) {
        SplashScreen.hide({ fadeOutDuration: 1000 });
      }

      this.fcmService.initPush();
    });
  }



  logout() {
    this.userService.logout();
  }


}
