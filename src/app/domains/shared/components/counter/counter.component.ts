import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChange, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';
  counter = signal(0);
  couterRef: number | undefined;


  constructor(){
    //no async
    //before render
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges){
    //before and during render
    console.log('ngonchanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const changeDur = changes['duration'];
    if(changeDur != undefined && changeDur.currentValue != changeDur.previousValue){
      this.doSomething();
    }
  }

  ngOnInit(){
    //after render
    //una vez
    //async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    this.couterRef = window.setInterval(() => {
      this.counter.update(statePrev => statePrev + 1);
      console.log('sum conuter')
    }, 1000)
  }

  ngAfterViewInit(){
    //after render
    //hijos ya fueron pintados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy(){
    //al final al desrtruir componente
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.couterRef);
  }

  doSomething(){
    console.log('dosSomeThing')
  }
}
