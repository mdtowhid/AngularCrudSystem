import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses = [
    { id: 1, name: 'C#' },
    { id: 2, name: 'ASP.NET' },
    { id: 3, name: 'ADO.NET' },
    { id: 4, name: 'HTML' },
    { id: 5, name: 'REACT' },
  ];

  constructor() {}

  ngOnInit() {
    this.courses.forEach((res) => res);
  }
}
