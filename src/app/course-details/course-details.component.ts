import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {
  constructor(private active: ActivatedRoute) {}
  subject:any;
  ngOnInit(): void {
this.active.paramMap.subscribe((data)=> {
  console.log("parammap",data.get('name'));
  this.subject = data.get('name')?.toString();
})
  }

}
