import { Component, computed, effect, OnDestroy, OnInit, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-tutorial',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-tutorial.component.html',
  styleUrl: './rxjs-tutorial.component.css'
})
export class RxjsTutorialComponent implements OnInit,OnDestroy {
  observable = new Observable((sub)=> {
    sub.next('Hello');
    sub.next('welcome to observable');
    sub.complete();
  });

  counter = signal(3);

  doubeCount = computed(()=> this.counter() +2);

  updateCounter(){
    this.counter.set(4);
  }
  constructor() {
    effect(() => {
      console.log("This current cout is",this.counter);
      })
  }

  ngOnInit():void {
    this.observable.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Observable comleted'),
    })

  }

  ngOnDestroy(): void {
  }
}
