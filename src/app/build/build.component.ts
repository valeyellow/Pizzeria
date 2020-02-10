import { Component, OnInit } from '@angular/core';
import { BuildService } from '../build.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent implements OnInit {

  constructor(private api:BuildService,private router: Router) { }

  ngOnInit() {
    this.getIngredientList();
  }

  checkboxValue : boolean = false;
  priceArray = [];
  selectedPrice = 0;
  totalPrice = 0;
  IngredientList:any;
  savePrice = false;
  ingredientArray=[];
  username=this.api.getUserStatus();
  getIngredientList() {
    this.api.getIngredients().subscribe((response)=>{
      this.IngredientList=response;
      console.log(this.IngredientList)
    }),
    err=>{
      console.log('Unable to access')
    }

  }
  
  getPrice(event : Event,ingredient) {
    this.selectedPrice = parseInt((<HTMLInputElement>event.target).value);
    if ((<HTMLInputElement>event.target).checked) {

      this.totalPrice += this.selectedPrice;
      this.ingredientArray.push(ingredient.tname)
      console.log(this.ingredientArray)
    }
    else if (!((<HTMLInputElement>event.target).checked)) {
      if(this.totalPrice >= this.selectedPrice){
        this.totalPrice -= this.selectedPrice;
        this.ingredientArray.splice(this.ingredientArray.indexOf(ingredient.tname),1);
        console.log(this.totalPrice)
      }
    }
    console.log("Total Price is : ", this.totalPrice);
  }

  addIngredientToCart(){
 
    let ingredient = {
      image:"assets/topping.jpg",
      name : "Toppings",
      price : this.totalPrice,
      ingredients:this.ingredientArray
    }
    console.log(ingredient)
   
    this.api.postIngredients(ingredient).subscribe((res)=>{
      console.log(res);
      alert("Product added")
    },
    err=>{
      console.log("Error")
    })
  }
}