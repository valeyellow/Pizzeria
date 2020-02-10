import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PizzaDetailsService } from '../pizza-details.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,  private api:PizzaDetailsService) { }

  ngOnInit() {
    this.api.getCart().subscribe(
      (response)=>{
        this.CartList=response;
        //console.log(this.CartList);
        let present = this.CartList.filter(cart => cart.username == this.username);
        this.presentList=present;
      },
      err=>{
        console.log("Unable to recieve information");
      }
    )
    this.username=this.api.getUserStatus();
  }
  CartList:any;


 username:string;
 presentList:any;

  UserStatus(){
    this.username=this.api.getUserStatus();
    let present = this.CartList.filter(cart => cart.username == this.username);
    this.presentList=present;
  }
  logout(){
    this.router.navigate(['/Login']);
    this.api.setUserStatus('Guest');
  }
  
  ShoppingCart(){
    this.router.navigate(['/Cart']);
  }
  
}


