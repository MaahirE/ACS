import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { SharedService } from 'src/app/services/shared.services';
import { IonContent, Platform } from '@ionic/angular';
import { MessagesQuery, MessagesService, MessagesStore } from 'src/app/stores/messages';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UserQuery } from 'src/app/stores/user';
import { Keyboard } from '@capacitor/keyboard';

@UntilDestroy()
@Component({
    selector: 'app-conversation',
    templateUrl: './conversation.page.html',
    styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {
    @ViewChild(IonContent) content: IonContent;
    conversation: any;
    message: any;
    messages: any;
    reply: any;
    isBusy = {
        sending: false
    }
    user: any;

    constructor(
        private platform: Platform,
        public httpService: HttpService,
        public sharedServices: SharedService,
        private messagesService: MessagesService,
        private messagesQuery: MessagesQuery,
        private userQuery: UserQuery,
        private messagesStore: MessagesStore) {
        if (this.platform.is('capacitor')) {
            Keyboard.addListener('keyboardDidShow', () => {
                this.scrollToBottom();
            });
        }

        this.user = this.userQuery.getValue().data
        console.log(this.user)
    }

    ngOnInit() {
        this.messagesQuery.selectActive().subscribe(conversation => {
            this.getMessages(conversation.id)
            this.conversation = conversation
        }).unsubscribe()

        this.messagesQuery.selectEntity(this.conversation.id).pipe(untilDestroyed(this)).subscribe(conversation => {
            this.messages = conversation.messages
            this.reply = conversation.reply
        })
    }

    ionViewDidEnter() {
        this.scrollToBottom();
    }

    ionViewWillLeave() {
        this.messagesStore.setActive(null)
    }

    ionViewDidLeave() {
        if (this.platform.is('capacitor')) {
            Keyboard.removeAllListeners();
        }
    }

    doRefresh(event) {
        event.target.disabled = true;
        this.getMessages(this.conversation.id).finally(() => {
            event.target.complete();
            event.target.disabled = false;
        })
    }

    getMessages(conversationId) {
        return this.messagesService.getMessages(conversationId).then(() => {
            this.scrollToBottom();
        })
    }

    scrollToBottom() {
        setTimeout(() => {
            this.content.scrollToBottom(300)
        }, 200);
    }

    replyToMessage(message) {
        this.isBusy.sending = true
        this.messagesService.replyToMessage(message).then(() => {
            this.scrollToBottom();
            this.message = null;
        }).catch(() => {
            this.sharedServices.presentToast('Something wrong happened', 'danger');
        }).finally(() => {
            this.isBusy.sending = false
        })
    }

}