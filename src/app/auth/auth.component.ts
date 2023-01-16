import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @ViewChild('autoShownModal', { static: false }) autoShownModal?: ModalDirective;
  @Input() isUser: boolean = false;

  userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    const user = {
      username: this.userForm.value.username,
      password: this.userForm.value.password
    }
    localStorage.setItem('user', JSON.stringify(user))
  }

  hideModal(): void {
    this.autoShownModal?.hide();
  }
}
