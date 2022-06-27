import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'member-list',
    templateUrl: './member-list.component.html',
    styleUrls: ['./member-list.component.scss'],
})
export class MemberListComponent implements OnChanges {
    @Input() members: any

    roles: any

    constructor() { }

    ngOnChanges() {
        if (this.members) {
            const rolesAll = this.members.map(a => a.role);
            this.roles = [... new Set(rolesAll)];
        }
    }

}