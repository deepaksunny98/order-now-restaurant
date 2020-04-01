import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'FoodApp';
  login = false;
  constructor() {}
  showDashboard = false;
  ngOnInit() {
    // const profileForm = this.fb.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
    }
}
