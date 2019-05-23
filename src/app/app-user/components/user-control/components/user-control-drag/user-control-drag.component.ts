import { Component, OnInit, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { AddTestResult } from '../../../../../store/actions/auth/auth.actions';
import { transferArrayItem, moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { filter, takeUntil, map } from 'rxjs/operators';
import { selectTestWords } from '../../../../../store/selectors/test/test.selectors';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { getSelectedControlTest } from '../../../../../store/selectors/control-test/control-test.selectors';

@Component({
  selector: 'app-user-control-drag',
  templateUrl: './user-control-drag.component.html',
  styleUrls: ['./user-control-drag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserControlDragComponent implements OnInit {
  @Input() public  testId: string;
  @Input() private correctWords: Set<any>;
  @Input() private incorrectWords: Set<any>;

  public destroy$: Subject<any> = new Subject<any>();
  public letters: string[] = [];
  public result: string[] = [];
  public hint: string;
  public answer: string;
  public words: any[];

  private dateStarted: Date = new Date();
  private timeSpent: number;

  private currentIndex = 0;

  constructor(
    private store: Store<any>,
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.initData();
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private initData(): void {
    this.store.select(getSelectedControlTest)
      .pipe(filter(Boolean))
      .pipe(map(({ words }) => words))
      .pipe(takeUntil(this.destroy$))
      .pipe(filter(Boolean))
      .subscribe((words) => {
        this.words = words;
        this.answer = words[0]['word'];
        this.letters = words[0]['word'].split('');
        this.hint = words[0]['translation'].toUpperCase();
      });
  }

  public drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  public onNextClick(): void {
    this.checkWord();
    this.updateData();
  }

  private checkWord(): void {
    if (this.result.join('') === this.answer) {
      this.correctWords.add(this.words[this.currentIndex]['_id']);
      this.incorrectWords.delete(this.words[this.currentIndex]['_id']);
    } else {
      this.correctWords.delete(this.words[this.currentIndex]['_id']);
      this.incorrectWords.add(this.words[this.currentIndex]['_id']);
    }
  }

  private updateData(): void {
    this.currentIndex++;
    if (this.currentIndex < this.words.length) {
      this.letters = this.splitAndShuffle(this.words[this.currentIndex]['word']);
      this.hint = this.words[this.currentIndex]['translation'].toUpperCase();
      this.answer = this.words[this.currentIndex]['word'];
      this.result = [];
    }
  }

  public onComplete(): void {
    this.timeSpent = (new Date(+new Date() - +this.dateStarted)).getMinutes();
    this.store.dispatch(new AddTestResult({
      controlId: this.testId,
      data: {
        date: this.dateStarted,
        timeSpent: this.timeSpent,
        correctWords: Array.from(this.correctWords),
        incorrectWords: Array.from(this.incorrectWords),
      }
    }));

    this.router.navigate(['user/control-tests']);
  }

  public isComplete(): boolean {
    return this.words && this.currentIndex === this.words.length;
  }

  private splitAndShuffle(word: string): string[] {
    return word.split('').sort(() => Math.round(Math.random()) - Math.random());
  }
}
