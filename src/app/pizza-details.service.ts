import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaDetailsService {

  url="http://localhost:5500";
  constructor(private http:HttpClient) { }
 id:number=0;
  username ='Guest';
  getpizza(){
    return this.http.get(this.url+"/pizza")
  }
  getCart(){
    return this.http.get(this.url+"/cart")
  }
  postPizza(Pizza : {
    name:string,
    price:number
  }){
    return this.http.post(this.url+"/cart",Pizza)
  }
  setUserStatus(status) {
    this.username = status;
  }

  getUserStatus() {
    return this.username;
  } 

  getUser(){
    return this.http.get(this.url+"/users")
  }
  postUser(user){
    return this.http.post(this.url+"/users",user);
  }
  
  getIngredients(){
    return this.http.get(this.url+"/ingredients");
  }
  setId(num) {
    this.id = num;
  }

  getId() {
    return this.id;
  } 

postDeletePizza(num){
    return this.http.post(this.url+"/delete",num)
  } 

}
