import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  user: User = {
      id: 1,
      name: "Austin"
  }

  constructor() { }

  ngOnInit() {
  }

}
