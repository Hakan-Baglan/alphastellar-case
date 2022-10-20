import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { change } from 'src/store/actions/color.actions';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {
  colors$: Observable<string[]> = new Observable<string[]>();
  color$: Observable<string> = new Observable<string>();

  constructor(private store: Store<{ colors: string[], color: string }>) {
    this.colors$ = store.select('colors');
    this.color$ = store.select('color');
  }

  ngOnInit(): void {
  }
  changeColor(color: string) {
    this.store.dispatch(change({ value: color }))
  }
}
