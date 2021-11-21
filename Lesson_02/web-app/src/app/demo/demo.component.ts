import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
} from "@angular/core";

type DemoComponentChanges = {
  [propName in keyof DemoComponent]: SimpleChange;
};

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
})
export class DemoComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{
  @Input() text: string = '';

  values = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  selectedValue: string = '';

  ngAfterViewInit(): void {
    console.log('DemoComponent: ngAfterViewInit');
  }

  ngOnChanges(changes: DemoComponentChanges): void {
    if (changes.text) {
      console.log('DemoComponent: The property "text" has changed');
    }
    console.log('DemoComponent: ngOnChanges', changes);
  }

  ngOnDestroy(): void {
    console.log('DemoComponent: ngOnDestroy');
  }

  ngOnInit(): void {
    console.log('DemoComponent: ngOnInit');
  }
}
