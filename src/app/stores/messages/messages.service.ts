import { Injectable } from "@angular/core";
import { HttpService } from "src/app/services/http.service";
import { MessagesQuery } from "./messages.query";
import { MessagesStore } from "./messages.store";

@Injectable({ providedIn: "root" })
export class MessagesService {
    constructor(
        private messagesStore: MessagesStore,
        private messagesQuery: MessagesQuery,
        private httpService: HttpService
    ) { }

    getConversationList() {
        return this.httpService
            .request("GET", "conversationList")
            .then((result) => {
                const conversations = result[0].objectList;
                this.messagesStore.upsertMany(conversations);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getMessages(conversationId) {
        return this.httpService
            .request("GET", "messageList", { conversationId })
            .then((result) => {
                const messages = result[0].objectList;
                this.messagesStore.update(conversationId, { messages });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    replyToMessage(message) {
        const conversation: any = this.messagesQuery.getActive();
        console.log(conversation);
        const reply = {
            conversationId: conversation?.id,
            profile: conversation?.uniqueId,
            message,
        };

        return this.httpService
            .request("POST", "message", reply)
            .then((result) => {
                if (result[0]?.status?.code === 0) {
                    this.messagesStore.update(conversation.id, { reply: null });
                    this.getMessages(conversation.id);
                }
            })
            .catch((error) => {
                this.messagesStore.update(conversation.id, { reply });
                console.log(error);
            });
    }

    async notifications() {
        const payload = {
            profile: "khanya-gope",
            title: "Testing notifications in Zireplus",
            pushNotification: true,
        }
        return await this.httpService.request('POST', 'notification', payload).then(result => {
            console.log(result)
            return result[0];
        })
    }
}