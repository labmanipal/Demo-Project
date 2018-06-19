import { Component, OnInit } from '@angular/core';
import { Data } from '../../shared/data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: Array<Data>;


  constructor(
  ) {
  this.data = [];
  console.log('this', this.data);
  }

  ngOnInit() {
  }
  addContact(name) {
    const info = new Data(name);
    this.data.push(info);
    console.log(this.data);
  }

  removeContact(info) {
    const index = this.data.indexOf(info);
    this.data.splice(index, 1);
  }
}




