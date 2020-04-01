import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  profileForm: FormGroup;
  ngOnInit() {
   sessionStorage.setItem('login', 'false');
    this.profileForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }
  onSubmit(data) {
    if (data.username === 'Restuarent' && data.password === '123456') {
      sessionStorage.setItem('login', 'true');
       this.router.navigateByUrl('/sidebar');
    }
  }

}
