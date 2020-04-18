import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service: AdminService) { }
  profileForm: FormGroup;
  ngOnInit() {
   sessionStorage.setItem('login', 'false');
    this.profileForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }
  onSubmit(data) {
    this.service.login(data).then(res => {
      console.log('jwt ---> ', res);
    });
    // if (data.username === 'admin' && data.password === 'admin') {
    //   sessionStorage.setItem('login', 'true');
    //    this.router.navigateByUrl('/sidebar');
    // }
  }

}
