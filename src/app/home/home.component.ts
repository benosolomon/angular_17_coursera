import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { MydirectiveDirective } from '../mydirective.directive';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChildComponent,
    MydirectiveDirective,

  ],
  providers: [DataServiceService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  constructor(private dataService: DataServiceService,
    private router: Router
  ) {}
  superAdmin = true;
  Admin = false;
  color='red';
  itemList = ['Item1','Item2','Item3'];
  selectedItem: string = '';
 ngOnInit(): void {
    this.itemList = this.dataService.getData();
  }
  onSelctedItem(item: string){
  this.selectedItem = item;
}
gotoCource() {
  this.router.navigate(['/course']);
}
addNewItem() {
  const newItem =
  {id: this.itemList.length +1 , name: `Item ${this.itemList.length+1}`};
  this.dataService.addData(newItem);
}


}
