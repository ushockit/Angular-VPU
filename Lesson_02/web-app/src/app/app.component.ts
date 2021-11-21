import {AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{
  title = 'web-app';
  isShowPeopleList = true;
  isHideDemo: boolean = false;

  ngAfterViewInit(): void {
    console.log('AppComponent: ngAfterViewInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('AppComponent: ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('AppComponent: ngOnDestroy');
  }

  ngOnInit(): void {
    console.log('AppComponent: ngOnInit');
  }
  onBtnChangeClick() {
    this.title = `${this.title}_changed`;
  }
}
