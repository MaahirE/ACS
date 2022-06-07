import { Component, OnInit } from '@angular/core';
import { UserQuery } from 'src/app/stores/user';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {
  constructor(public userQuery: UserQuery) { }

  ngOnInit() { }
}
