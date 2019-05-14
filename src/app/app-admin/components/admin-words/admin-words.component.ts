import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadWords, DeleteWord, CreateWord, LoadWordsSuccess } from '../../../store/actions/words/words.actions';
import { selectWordList } from '../../../store/selectors/words/words.selectors';
import { WordModel } from '../../../models/word.models';
import { MatDialog } from '@angular/material';
import { NewWordModalComponent } from '../../../shared/modals/new-word-modal/new-word-modal.component';
import { filter } from 'rxjs/operators';
import { ConfirmDialogComponent } from '../../../shared/modals/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-admin-words',
  templateUrl: './admin-words.component.html',
  styleUrls: ['./admin-words.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminWordsComponent implements OnInit {
  public words$: Observable<WordModel[]>;

  constructor(
    private store: Store<any>,
    private dialog: MatDialog
  ) { }

  public ngOnInit(): void {
    this.initData();
  }

  private initData(): void {
    this.store.dispatch(new LoadWords());
    this.words$ = this.store.select(selectWordList);
  }

  public deleteWord({ _id }: WordModel): void {
    this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: { text: 'Are you sure you want to delete the word?' }
    }).afterClosed()
      .pipe(filter(Boolean))
      .subscribe(() => {
        this.store.dispatch(new LoadWordsSuccess(null));
        this.store.dispatch(new DeleteWord(_id));
      });
  }

  public addWord(): void {
    this.dialog.open(NewWordModalComponent, {
      width: '400px'
    }).afterClosed()
      .pipe(filter(Boolean))
      .subscribe(word => {
        this.store.dispatch(new LoadWordsSuccess(null));
        this.store.dispatch(new CreateWord(word));
      });
  }
}
