import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuildService {
  url="http://localhost:5500";
  constructor(private http:HttpClient) { }
  username='Guest'
  id:number=0
  getIngredients(){
    return this.http.get(this.url+"/ingredients");
  }
  postPizza(Pizza : {
    name:string,
    price:number
  }){
    return this.http.post(this.url+"/cart",Pizza)
  }
  postIngredients(Ingredient : {
    name:string,
    price:number
  }){
    return this.http.post(this.url+"/cart",Ingredient)
  }
  setUserStatus(status) {
    this.username = status;
  }

  getUserStatus() {
    return this.username;
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
