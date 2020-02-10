import { Component, OnInit } from '@angular/core';
import { PizzaDetailsService } from '../pizza-details.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private api:PizzaDetailsService) { }

  ngOnInit() {
    this.getpizzaList();
  }
  Pizza: {
    name:string,
    price:number,
    image : string
  }

  cartArray = [];
  PizzaList:any
  isveg:boolean;

  getpizzaList() {
    this.api.getpizza().subscribe((response)=>{
      this.PizzaList=response;
      console.log(this.PizzaList)
    }),
    err=>{
      console.log('Unable to access')
    }

  }
  username=this.api.getUserStatus();
  addToCart(event : Event, item){
    if(this.username==null){
      alert("Continue as Guest User?");
    } 
    let pizza = {
      id:this.api.getId(),
      name : item.name,
      price : item.price,
      image : item.image
    }
    this.api.setId(this.api.getId()+1);
    // console.log("Added ! " , pizza)
    this.cartArray.push(pizza);
    console.log("My Cart : ", this.cartArray);
    this.api.postPizza(pizza).subscribe((res)=>{
      console.log(res);
      alert("Product added")
    },
    err=>{
      console.log("Error")
    })
}
addIngredientToCart(event : Event, item){
  let Ingredient = {
    name : item.name,
    price : item.price,
  }
  this.cartArray.push(Ingredient);
  console.log("My Cart : ", this.cartArray);
  this.api.postPizza(Ingredient).subscribe((res)=>{
    console.log(res);
    alert("Product added")
  },
  err=>{
    console.log("Error")
  })
}
  type='';

settype(t){
    if(t=='veg')
      this.isveg=true;
    else 
      this.isveg=false;
  }

}

  


