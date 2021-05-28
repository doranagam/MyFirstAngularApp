import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  userForm: FormGroup;
  ngOnInit() {
    console.log("Hello");
    this.userForm = new FormGroup({
      firstName: new FormControl(""),
      lastname: new FormControl(""),
      username: new FormControl(""),
      Password: new FormControl(""),
      gender: new FormControl()
    });
  }

  onSubmit() {
console.log(this.userForm);

  }

}
