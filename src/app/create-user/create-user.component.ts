import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  addUserForm: FormGroup;
  hide = true;
  userData: any [] = [];
  constructor(private fb: FormBuilder, private location: Location, private router: Router) {
    this.addUserForm = this.fb.group({
      gender: ['', Validators.required], title: ['', Validators.required], firstName: ['', Validators.required],
      lastName: [''], email: ['', Validators.required], username: ['', Validators.required], password: ['', Validators.required], 
      dob: ['', Validators.required], phone: ['', Validators.required]
    });
   }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userList'));
  }
  onCancelClick = () => {
    this.location.back();
  }
  onAddUser = () => {
    const userData = {
      user: {
        gender: this.addUserForm.value.gender,
        email: this.addUserForm.value.email,
        dob: this.addUserForm.value.dob,
        password: this.addUserForm.value.password,
        username: this.addUserForm.value.username,
        name: {
          title: this.addUserForm.value.title,
          first: this.addUserForm.value.firstName,
          last: this.addUserForm.value.lastName
        },
        phone: this.addUserForm.value.phone,
      }
    };
    console.log(userData);
    const addedData = [...this.userData, userData];
    console.log(addedData, 'ssss');
    localStorage.setItem('userList', JSON.stringify(addedData));
    this.router.navigate(['home/userList']);
  }
}
