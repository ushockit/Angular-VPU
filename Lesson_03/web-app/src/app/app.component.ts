import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {from, fromEvent, Subject} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, map, take, takeUntil, tap} from "rxjs/operators";
import {PostsService} from "./posts/posts.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {visitAll} from "@angular/compiler";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'web-app';

  @ViewChild('btn') btn: ElementRef;
  destroy$ = new Subject();

  form: FormGroup;

  constructor() {
    // from([30, 41, 60])
    //   .pipe(
    //     filter((num) => num % 10 === 0),
    //     map((num) => num * 2)
    //   )
    //   .subscribe((vl) => console.log(vl));
    // fromEvent(document.getElementById('btn') as HTMLElement, 'click').subscribe(ev => {
    //   console.log(ev);
    // })
    this.form = new FormGroup({
      text: new FormControl('', Validators.required)
    });

    this.form.get('text')?.valueChanges.pipe(
      filter((val: string) => val.length > 0),
      debounceTime(350),
      distinctUntilChanged(),
      tap((val: string) => console.log(val)),
    ).subscribe(val => {
      // console.log(val);
    });
  }

  ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement, 'click').pipe(
      map(ev => ev as PointerEvent),
      tap(ev => {

      }),
      filter(ev => ev.x > 0 && ev.y > 0),
      // take(1)
      takeUntil(this.destroy$)
    ).subscribe((ev: PointerEvent) => {
      console.log(ev);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
