import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { MydirectiveDirective } from '../mydirective.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChildComponent,
    MydirectiveDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }
  superAdmin = false;
  Admin = false;
  color='red';
  itemList = ['Item1','Item2','Item3'];
  selectedItem: string = '';

  onSelctedItem(item: string){
  this.selectedItem = item;
}

}
