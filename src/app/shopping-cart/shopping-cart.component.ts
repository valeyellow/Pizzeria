import { Component, OnInit } from '@angular/core';
import { PizzaDetailsService } from '../pizza-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

   constructor(private api:PizzaDetailsService, private router:Router) { }

  ngOnInit() {
    this.getCartList()
    
  }
  CartList : any = [];



  username:string;
  display:string;
  presentList:any;
  totalPrice : number = 0;

  getCartList() {
    this.api.getCart().subscribe((response)=>{
      this.CartList = response;
       let present = this.CartList.filter(cart => cart.username == this.username);
        this.presentList=present;
      console.log(this.CartList);
      this.getTotalPrice();
      
    }),
    err=>{
      console.log('Unable to access')
    }
    console.log("cart list contains",this.CartList)

  }

  getTotalPrice() {
    for (var i = 0; i < this.CartList.length; i++) {
      this.totalPrice += parseInt(this.CartList[i].price);
    }
    console.log(this.totalPrice);
  }



PlaceOrder(){
     if(this.username=='Guest')
      alert("Continue as Guest User?");
    else{ 
      let present = this.CartList.filter(cart => cart.username == this.username);
      //console.log(present);
      this.totalPrice=0;
      for(let i=0;i<present.length;i++)
      this.totalPrice=this.totalPrice+parseInt(present[i].price);
      //console.log(this.username);
      this.display=this.username+" is supposed to pay "+this.totalPrice+" to place your Order";
      //console.log(this.sum);
      this.presentList=present;
      console.log(this.presentList);
    
  }}
  Logout(){
    this.username='Guest';
    console.log(this.username)
    this.router.navigate(['/Login'])
  }
  RemoveFromCart(event:Event,cart){
    let num={id:cart.id};
    this.api.postDeletePizza(num).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log("Unable to delete from the cart");
      }
    )
    window.location.reload()
  }
}


