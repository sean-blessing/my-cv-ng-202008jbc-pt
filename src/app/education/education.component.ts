import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  school = "Indiana University";
  major = "Computer Info Systems";
  year = 1993;

  constructor() { }

  ngOnInit(): void {
  }

}
