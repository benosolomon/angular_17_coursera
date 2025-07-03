import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input()
  items!: string[];

  @Output()
  selectedItemEvent = new EventEmitter<string>();

  selectedItem(item: string) {
    this.selectedItemEvent.emit(item);
  }
 }
