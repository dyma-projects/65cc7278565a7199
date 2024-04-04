import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColorDirectiveTs]'
})
export class ColorDirectiveTsDirective {
  @HostListener('window:keydown', ['$event']) ChangeColor(event: KeyboardEvent){
    if (event.key === 'ArrowUp'){
      this.el.nativeElement.style.color = 'tomato' ;
    } else if (event.key === 'ArrowDown'){
      this.el.nativeElement.style.color = 'green';
    } else if (event.key === 'ArrowRight'){
      this.el.nativeElement.style.color = 'purple';
    } else if (event.key === 'ArrowLeft'){
      this.el.nativeElement.style.color = 'blue'}
  }

  constructor(private el: ElementRef) { }

}
