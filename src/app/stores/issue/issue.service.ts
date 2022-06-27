import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { IssueQuery } from './issue.query';
import { IssueStore } from './issue.store';

@Injectable({ providedIn: 'root' })
export class IssueService {

    constructor(private issueStore: IssueStore, private issueQuery: IssueQuery, private http: HttpService) {
    }

    async getIssueList(profile) {
        this.issueStore.setLoading(true);
        return await this.http.request('GET', 'issueList', { profile, items: '200', fields: 'id,number,status,problem,severity,enteredBy,enteredDate,enteredText,uniqueId' }).then(result => {
            this.issueStore.upsertMany(result[0].objectList);
        }).finally(() => {
            this.issueStore.setLoading(false);
        });
    }

    async getIssue(id, profile) {
        this.issueStore.setLoading(true);
        return await this.http.request('GET', 'issueList', { profile, id, fields: 'id,number,status,problem,severity,enteredBy,enteredDate,imageUrl,imageWidth,imageHeight,assignedTo,enteredText,closedText,historySize,numberOfAttachments,issueCategory,history,attachments,log*,file*,uniqueId' }).then(result => {
            this.issueStore.upsert(id, result[0].objectList[0]);
        }).finally(() => {
            this.issueStore.setLoading(false);
        });
    }

    async updateIssue(newIssue) {
        this.issueStore.setLoading(true);
        return await this.http.request('POST', 'issue', newIssue).then(result => {
            if (result[0].status.code === 0) {
                this.getIssue(result[0].objectList[0].issueId, newIssue.profile);
            }
            return result[0];
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            this.issueStore.setLoading(false);
        });
    }

}