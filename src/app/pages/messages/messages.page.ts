import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { NavController, IonRouterOutlet } from '@ionic/angular';
import { SharedService } from 'src/app/services/shared.services';
import { LoginPage } from '../login/login.page';
import { UserQuery, UserService } from 'src/app/stores/user';
import { MessagesQuery, MessagesService, MessagesStore } from 'src/app/stores/messages';
import { Animations } from 'src/app/utils/animations';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.page.html',
    styleUrls: ['./messages.page.scss'],
    animations: [Animations.stagger, Animations.fadeIn]
})
export class MessagesPage implements OnInit {
    user: any;
    conversations: any;
    isBusy = {
        refreshing: false
    }

    constructor(
        public userQuery: UserQuery,
        public httpService: HttpService,
        private navCtrl: NavController,
        private messagesQuery: MessagesQuery,
        private messagesService: MessagesService,
        private messagesStore: MessagesStore,
        public sharedService: SharedService,
        private routerOutlet: IonRouterOutlet,
        private userService: UserService,) {
        this.userQuery.select('data').subscribe(user => {
            this.user = user
            this.getConversationList()
        })

        this.messagesQuery.selectAll().subscribe(conversations => {
            this.conversations = conversations
        })
    }

    ngOnInit() {
        this.messagesService.notifications();
    }

    doRefresh(event) {
        event.target.disabled = true;
        this.isBusy.refreshing = true
        this.getConversationList().finally(() => {
            event.target.complete();
            this.isBusy.refreshing = false
            event.target.disabled = false;
        })
    }

    openLogin() {
        this.sharedService.presentModal(this.routerOutlet, LoginPage)
    }

    ionViewWillEnter() {
        this.getConversationList()
    }


    getConversationList() {
        if (this.user?.isGuest === 'false') {
            return this.messagesService.getConversationList()
        }
    }

    openMessage(id) {
        this.messagesStore.setActive(id)
        this.navCtrl.navigateForward('tabs/messages/conversation')
    }

    newMessage() {
        this.navCtrl.navigateForward('tabs/messages/new')
    }

}