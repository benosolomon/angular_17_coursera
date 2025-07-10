import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-client',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './http-client.component.html',
  styleUrl: './http-client.component.css'
})
export class HttpClientComponent {

  constructor(private httpClient: HttpClient){}

  result : any =[];

  makecall(){
    this.httpClient.get<[]>("http://localhost:3000/posts")
    .subscribe((res)=> {
      this.result = res.map((data: {title: any}) => data.title);
      console.log(res);
    })
  }
}
