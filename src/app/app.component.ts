import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { RxjsTutorialComponent } from './rxjs-tutorial/rxjs-tutorial.component';
import { HttpClientComponent } from './http-client/http-client.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FormsModule,
    FooterComponent,
    RxjsTutorialComponent,
CommonModule,
RouterOutlet,
HttpClientComponent,
    HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'class1';
  name = '';
  ngOnInit(): void {
    console.log("NgOnit checked");
    this.title= "hello";
  }
}
