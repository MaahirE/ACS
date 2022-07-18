import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.services';
import { IonRouterOutlet, NavController } from '@ionic/angular';
import { LoginPage } from 'src/app/pages/login/login.page';
import { HttpService } from 'src/app/services/http.service';
import { NavigationExtras } from '@angular/router';
import { UserQuery } from 'src/app/stores/user';
import { ProfileQuery, ProfileService, ProfileStore } from 'src/app/stores/profile';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Animations } from 'src/app/utils/animations';

@UntilDestroy()
@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
  animations: [Animations.stagger, Animations.fadeIn]
})
export class GroupsPage implements OnInit {
  groups: any;
  user: any;
  isBusy = {
    loading: false,
    refreshing: false
  };

  constructor(
    public http: HttpService,
    public userQuery: UserQuery,
    public profileStore: ProfileStore,
    public profileQuery: ProfileQuery,
    public profileService: ProfileService,
    public sharedService: SharedService,
    private routerOutlet: IonRouterOutlet,
    private navCtrl: NavController) {
    // this.profileQuery.selectAll({ filterBy: ({ category }) => category === 'Groups' }).pipe(untilDestroyed(this)).subscribe(groups => {
    //   this.groups = groups;
    // }
    // );

    this.profileQuery.selectLoading().pipe(untilDestroyed(this)).subscribe(state => {
      this.isBusy.loading = state;
    });
  }

  ngOnInit() {
    this.userQuery.select('data').subscribe(user => {
      this.user = user;
      if (user.isGuest === 'false') {
        this.getGroups();
        this.getGroups().then(groups => { this.groups = groups })
        console.log(this.getGroups());
      }
    });
  }

  openModal() {
    this.navCtrl.navigateForward('login')
  }

  doRefresh(event) {
    event.target.disabled = true;
    this.isBusy.refreshing = true;
    this.getGroups().finally(() => {
      event.target.complete();
      this.isBusy.refreshing = false;
      event.target.disabled = false;
    })
  }

  getGroups() {
    return this.profileService.getProfileList({ category: 'groups', view: 'mine' });
  }

  groupDetails(profile) {
    const segments = [
      { title: 'Updates', value: 'status' },
      { title: 'Info', value: 'wiki' },
      { title: 'Events', value: 'event' }, //events
      { title: 'Photos', value: 'photos' },
      { title: 'People', value: 'members' }
    ];
    const options: NavigationExtras = {
      state: { profile, segments }
    };
    this.navCtrl.navigateForward('tabs/groups/profile', options);
  }

  goToCreateGroup() {
    this.navCtrl.navigateForward('create-group')
  }

  goToSearch() {
    this.navCtrl.navigateForward('search')
  }

}