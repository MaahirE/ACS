import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StatusQuery } from 'src/app/stores/status';
import { Animations } from 'src/app/utils/animations';

@Component({
    selector: 'status-list',
    templateUrl: './status-list.component.html',
    styleUrls: ['./status-list.component.scss'],
    animations: [Animations.stagger, Animations.fadeIn]
})
export class StatusListComponent implements OnInit {
    @Input() profile: any;
    @Output() selectedStatus = new EventEmitter();
    status: any;

    constructor(private statusQuery: StatusQuery) { }

    ngOnInit() {
        this.statusQuery.selectAll({
            filterBy: ({ uniqueId, recordName }) => {
                return this.profile ? uniqueId === this.profile?.uniqueId : recordName === 'status';
            }
        }).subscribe(status => {
            this.status = status;
        });
    }

    thisStatus(status) {
        this.selectedStatus.emit(status);
    }

}