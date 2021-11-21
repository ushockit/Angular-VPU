import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[textHover]'
})
export class TextHoverDirective {
  @HostBinding('style.border') border: string = 'none';

  // private el: HTMLElement;
  constructor(
    private readonly elRef: ElementRef,
    private readonly renderer: Renderer2) {
    // this.el = elRef.nativeElement as HTMLElement;
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('Mouse enter');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.elRef.nativeElement, 'fontSize', '18px');
    this.border = '1px solid black';
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('Mouse leave');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.renderer.setStyle(this.elRef.nativeElement, 'fontSize', '16px');
    this.border = 'none';
  }
}
