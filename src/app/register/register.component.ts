import { Component, OnInit } from '@angular/core';
import { PizzaDetailsService } from '../pizza-details.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {  
   UserRegister: FormGroup;

  constructor(private fb:FormBuilder ,private api:PizzaDetailsService,private router:Router) { }

  message:string;
  
  ngOnInit() {
     this.UserRegister=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
      confirmpassword:['',Validators.required]
    }) 

  }
  register(){
      if(this.UserRegister.get('password').value!= this.UserRegister.get('password').value){
        this.message="Password and Confirm Password do not Match";
      } else {
        let user={username:this.UserRegister.get('username').value, password:this.UserRegister.get('password').value}
        this.api.postUser(user).subscribe(
          (res)=>{
            console.log(res);
          },
          err=>{
            console.log("Unable to Add User");
          }
        )
    }
    }
    submit(){
      this.router.navigate(['/Home'])
    }
  }
