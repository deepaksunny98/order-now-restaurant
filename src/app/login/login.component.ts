import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import * as jwt_decode from 'jwt-decode';
import { LoginInterface } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private service: AdminService) {}
  profileForm: FormGroup;
  ngOnInit() {
    sessionStorage.setItem('login', 'false');
    this.profileForm = new FormGroup({
      Email: new FormControl(''),
      Password: new FormControl(''),
    });
  }
  onSubmit(data) {
    this.service.login(data).then((res: any) => {
      const decoded: LoginInterface = jwt_decode(res.token);
      console.log(decoded);
      sessionStorage.setItem('userId', decoded.UserId.toString());
      sessionStorage.setItem('token', res.token);
      this.router.navigateByUrl('/sidebar');
    });
    // if (data.username === 'admin' && data.password === 'admin') {
    //   sessionStorage.setItem('login', 'true');
    //    this.router.navigateByUrl('/sidebar');
    // }
  }
}
