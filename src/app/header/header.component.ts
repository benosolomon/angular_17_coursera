import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MyupperPipe } from '../myupper.pipe';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UpperCasePipe,
    RouterLink,
    RouterLinkActive,
    MyupperPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
heading="angular 18";
}
