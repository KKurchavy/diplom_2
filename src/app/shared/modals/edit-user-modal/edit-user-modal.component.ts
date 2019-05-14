import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditUserModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
