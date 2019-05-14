import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { selectTestWords } from '../../../../../store/selectors/test/test.selectors';
import { AddTestResult } from '../../../../../store/actions/auth/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit, OnDestroy {
  public destroy$: Subject<any> = new Subject<any>();
  public letters: string[] = [];
  public result: string[] = [];
  public hint: string;
  public answer: string;
  public words: any[];

  private dateStarted: Date = new Date();
  private timeSpent: number;

  private currentIndex = 0;
  private correctWords: string[] = [];
  private incorrectWords: string[] = [];

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
    this.store.select(selectTestWords)
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
      this.correctWords.push(this.words[this.currentIndex]['_id']);
    } else {
      this.incorrectWords.push(this.words[this.currentIndex]['_id']);
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
      date: this.dateStarted,
      timeSpent: this.timeSpent,
      correctWords: this.correctWords,
      incorrectWords: this.incorrectWords,
    }));

    this.router.navigate(['user/results']);
  }

  public isComplete(): boolean {
    return this.currentIndex === this.words.length;
  }

  private splitAndShuffle(word: string): string[] {
    return word.split('').sort(() => Math.round(Math.random()) - 1);
  }
}
