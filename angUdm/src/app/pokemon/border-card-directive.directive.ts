import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCardDirective]'
})
export class BorderCardDirectiveDirective {
    initialColor: string = '#f5f5f5';
    defaultColor: string  = '#158623';
    defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }
  @Input('appBorderCardDirective') borderColor: string;

  @HostListener('mouseleave') onMouseLeave(){
  this.setBorder(this.initialColor);
  }
  @HostListener( 'mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
  }

  private setBorder(color: string) {
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }

}
