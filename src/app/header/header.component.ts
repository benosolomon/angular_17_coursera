import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MyupperPipe } from '../myupper.pipe';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UpperCasePipe,MyupperPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
heading="angular 18";
}
