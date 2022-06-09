import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BlogQuery, BlogService } from 'src/app/stores/blog';
import { UserQuery } from 'src/app/stores/user';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.page.html',
  styleUrls: ['./blogs.page.scss'],
})
export class BlogsPage implements OnInit {
  constructor(
    private blogService: BlogService,
    public blogQuery: BlogQuery,
    private navCtrl: NavController,
    public userQuery: UserQuery,
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.blogService.getList();
  }

  goTo(blog) {
    this.navCtrl.navigateForward('blog-details', {
      state: { blog },
    });
  }

  goToTR(wiki) {
    this.navCtrl.navigateForward('treatment-resources', {
      state: { wiki },
    });
  }

  goToV(wiki) {
    this.navCtrl.navigateForward('volunteer', {
      state: { wiki },
    });
  }

  goToLogin() {
    this.navCtrl.navigateForward('login')
  }
}
