import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
