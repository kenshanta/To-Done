import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  title = 'Header';
  constructor() {}
  ngOnInit(): void {}
  toggleAddTask() {
    console.log('toggled');
  }
}
