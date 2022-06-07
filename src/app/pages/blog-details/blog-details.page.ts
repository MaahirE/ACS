import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BlogQuery, BlogService } from 'src/app/stores/blog';
import { UserQuery } from 'src/app/stores/user';

@UntilDestroy({ checkProperties: true })
@Component({
    selector: 'app-blog-details',
    templateUrl: './blog-details.page.html',
    styleUrls: ['./blog-details.page.scss'],
})
export class BlogDetailsPage implements OnInit {
    blog: any;

    constructor(
        private router: Router,
        private blogService: BlogService,
        private navCtrl: NavController,
        public blogQuery: BlogQuery,
        public sanitizer: DomSanitizer,
        public userQuery: UserQuery
    ) { }

    async ngOnInit() {
        const { state } = this.router.getCurrentNavigation().extras;
        this.blog = state.blog;
        await this.blogService.getBlog(this.blog.id);
        this.blogQuery
            .selectEntity(this.blog.id)
            .subscribe((blog) => {
                if (blog) {
                    this.blog = blog
                }
            });
    }

    goToLogin() {
        this.navCtrl.navigateForward('login')
    }
}