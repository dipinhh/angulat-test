import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: any;
  isValid = true;
  constructor(private loginService: LoginService, private fb: FormBuilder,
    private route: ActivatedRoute,  private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required], password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getUsers();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }
  get f() { return this.loginForm.controls; }

  getUsers = () => {
    this.loginService.getUserLis().subscribe(res => {
      localStorage.setItem('userList', JSON.stringify(res.results));
    });
  }
  login = () => {
    this.loginService.login(this.f.username.value, this.f.password.value)
    .pipe(first())
    .subscribe(
        data => {
          this.router.navigate(['home/userList']);
        },
        error => {
          console.log(error);
          this.isValid = false;
            // this.alertService.error(error);
            // this.loading = false;
        });
  }
}
