import { Directive,ElementRef,HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMydirective]',
  standalone: true
})
export class MydirectiveDirective {

  constructor(private el : ElementRef,private renderer: Renderer2) {

   }

   @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
   }
    @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
   }

   private highlight(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor',color);
   }

}
