import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {
  //hace manipulaciones directa del dom
  //
  element = inject(ElementRef);
  constructor() { 

  }

  ngOnInit(){
    this.element.nativeElement.style.backgroundColor = "red";
  }

}
