import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: any[] = [];
  term = new FormControl();
  constructor(private router: Router) { }

  ngOnInit() {
    this.userList = JSON.parse(localStorage.getItem('userList'));
    console.log(this.userList);
  }
  onAddUserClick = () => {
    this.router.navigate(['home/createUser']);
  }
}
