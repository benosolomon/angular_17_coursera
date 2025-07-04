import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private data: any[]= [
    {id:1,name: 'Item1'},
     {id:2,name: 'Item2'},
      {id:3,name: 'Item3'},
       {id:4,name: 'Item4'}
  ]
  constructor() { }
  getData() {
    return this.data;
  }

  addData(newItem: any): any {
    this.data.push(newItem);
  }
}
