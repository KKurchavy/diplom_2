import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CreateControlTest } from '../../../store/actions/control-test/control-test.actions';

@Component({
  selector: 'app-admin-create-test',
  templateUrl: './admin-create-test.component.html',
  styleUrls: ['./admin-create-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminCreateTestComponent implements OnInit {
  public index$ = new BehaviorSubject<number>(0);
  public executorId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<any>,
  ) {}

  public ngOnInit(): void {
    this.executorId = this.route.snapshot.queryParamMap.get('executorId');
  }

  public next(): void {
    this.index$.next(this.index$.value + 1);
  }

  public previous(): void {
    this.index$.next(this.index$.value - 1);
  }

  public createTest(words: string[]): void {
    this.store.dispatch(new CreateControlTest({
      executor: this.executorId,
      words: words
    }));

    this.router.navigate(['../tests'], { relativeTo: this.route });
  }
}
