import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PizzaDetailsService } from '../pizza-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted: any;
 

  constructor(private fb:FormBuilder ,private api:PizzaDetailsService, private router : Router) { }

  UserLogin:FormGroup;
  UsersList:any = [];
  ngOnInit() {
    this.UserLogin=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
   
    this.api.getUser().subscribe(
      (res)=>{
        this.UsersList = res;
        console.log(this.UsersList);
      },
      err=>{
        console.log("Unable to connect");
      }
    )
  }

  submit() {
    if(this.UserLogin.valid){
      let present = this.UsersList.filter(user => user.username == this.UserLogin.get('username').value);
       console.log("Hello", present);
       if (present.length === 0) {
         alert("User doesn't exist!");
     
         
       } else {
         if (present[0].password === this.UserLogin.get('password').value) {
            alert('login Successful!');
            this.api.setUserStatus(present[0].username);
            this.router.navigate(['/Order']);
         } else {
           alert('Incorrect password!')
         }     
       }
    }
  }
    }