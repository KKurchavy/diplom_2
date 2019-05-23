import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, timer, Subscription } from 'rxjs';
import { map, take, takeLast } from 'rxjs/operators';

@Component({
  selector: 'app-user-control-choose',
  templateUrl: './user-control-choose.component.html',
  styleUrls: ['./user-control-choose.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserControlChooseComponent implements OnInit {
  @Output() public next = new EventEmitter<any>();
  @Input() public debounceTime: number = 10;
  @Input('words') public set _testWords(words: any[]) {
    if (words) {
      this.words = words;
      this.initBasicData();
    }
  };
  @Input('testWords') public set _words(words: any[]) {
    if (words) {
      this.testWords = words;
      this.initBasicData();
    }
  };

  public words: any[] = [];
  public testWords: any[] = [];
  public timer$: Observable<any>;
  public setOfRandomWords: any[] = [];
  public isComplete: boolean = false;

  private subscription: Subscription;
  private currentWordIndex = 0;
  private correctWords: Set<any> = new Set();
  private incorrectWords: Set<any> = new Set();

  public ngOnInit(): void {
    this.initBasicData();
    this.initTimer();
  }

  public initBasicData(): void {
    this.resetTimer();
    this.setOfRandomWords = this.getSetOfRandomWords();
  }

  private shuffle(words: any[]): any[] {
    return words.sort(() => Math.round(Math.random()) - 1);
  }

  public getSetOfRandomWords(): any[] {
    if (!this.words.length || !this.testWords.length) {
      return;
    }

    const words = this.words.filter(({ _id }) => _id !== this.testWords[this.currentWordIndex]['_id']);
    const { length } = words;

    const availableWords = [
      words[this.getRandomNumberInInterval(0, length)],
      words[this.getRandomNumberInInterval(0, length)],
      this.testWords[this.currentWordIndex],
    ];

    return this.shuffle(availableWords);
  }

  public getRandomNumberInInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  public get currentWord(): any {
    return this.testWords && this.testWords[this.currentWordIndex];
  }

  public onWordClick(word: any): void {
    if (this.currentWord['_id'] === word['_id']) {
      this.correctWords.add(word['_id']);
    } else {
      this.incorrectWords.add(word['_id']);
    }

    this.nextWord();
  }

  public nextWord(): void {
    if (this.currentWordIndex < this.testWords.length - 1) {
      this.currentWordIndex += 1;
      this.setOfRandomWords = this.getSetOfRandomWords();
      this.resetTimer();
      this.initTimer();
      return;
    }
    
    this.isComplete = true;
    return;
  }
  
  private resetTimer(): void {
    this.timer$ = timer(1000, 1000)
    .pipe(take(this.debounceTime))
    .pipe(map(value => this.debounceTime - value));
  }
  
  private initTimer() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.timer$
      .pipe(takeLast(1))
      .subscribe(() => {
        if (!this.isComplete) this.incorrectWords.add(this.currentWord['_id']);
        this.nextWord();
      });
  }

  public onNext(): void {
    this.next.next({
      correctWords: this.correctWords,
      incorrectWords: this.incorrectWords
    });
  }
}
