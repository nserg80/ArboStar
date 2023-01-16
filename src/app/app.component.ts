import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ArboStar';

  constructor() { }

  ngOnInit(): void {
    this.checkUser()
  }

  checkUser(): boolean {
    if (localStorage.getItem('user') !== null) {
      return true
    }
    return false
  }
}
