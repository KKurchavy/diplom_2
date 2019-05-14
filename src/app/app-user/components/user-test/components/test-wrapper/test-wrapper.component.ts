import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-test-wrapper',
  templateUrl: './test-wrapper.component.html',
  styleUrls: ['./test-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
