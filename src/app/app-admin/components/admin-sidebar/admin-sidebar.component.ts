import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { LoadUser, LoadUserSuccess } from '../../../store/actions/auth/auth.actions';
import { LoadDictionary, LoadDictionarySuccess } from '../../../store/actions/dictionary/dictionary.actions';
import { ClickSidebarButton, SelectSidebarItem } from '../../../store/actions/sidebar/sidebar.actions';
import { selectSidebarButtonName, selectSidebarData, selectSidebarNavigationUrl } from '../../../store/selectors/sidebar/sidebar.selectors';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminSidebarComponent implements OnInit {
  public defaultAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkV6Y55Awj0TFXxFWen5jpia-kLK0PJaP6JMNzdQ_MRrLwkJxP';
  public data$: Observable<any[]>;
  public buttonName$: Observable<string>;
  private navigateUrl: string;

  constructor(
    private store: Store<any>,
    private router: Router,
  ) { }

  ngOnInit() {
    this.buttonName$ = this.store.select(selectSidebarButtonName);
    this.data$ = this.store.select(selectSidebarData).pipe(
      filter(Boolean),
      tap(data => {
        if (!data[0]) {
          return;
        }

        this.store.dispatch(new LoadDictionary(data[0]._id));
        this.store.dispatch(new LoadUser(data[0]._id));
      }
    ));
    this.store.select(selectSidebarNavigationUrl)
      .pipe(filter(Boolean))
      .subscribe(url => this.navigateUrl = url);
  }

  public handleClick(item: any): void {
    this.store.dispatch(new LoadUserSuccess(null));
    this.store.dispatch(new LoadDictionarySuccess(null));
    this.store.dispatch(new SelectSidebarItem(item));
    this.router.navigate([this.navigateUrl]);
  }

  public handleButtonCLick(): void {
    this.store.dispatch(new ClickSidebarButton(true));
  }
}
