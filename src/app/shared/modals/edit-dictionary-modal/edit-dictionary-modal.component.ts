import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-edit-dictionary-modal',
  templateUrl: './edit-dictionary-modal.component.html',
  styleUrls: ['./edit-dictionary-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditDictionaryModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
