import { Component } from '@angular/core';
import { Product } from './shopping/model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pratice';
  appMinLabel = 'myAppMinLabel';
  appMaxLabel = 'myAppMaxLabel';
  sqaureHeight = 100;
  sqaureWidth = 250;
  appCounter = 20;
  activate :boolean = false;  
  customerList: string[] = ['customer1', 'customer2', 'customer3', 'customer4']
  value2:string='Hello Primeng';

  cars = [
    {
      year: 2020,
      brand: 'Honda'
    },
    {
      year: 2021,
      brand: 'Honda'
    },
    {
      year: 2022,
      brand: 'Honda'
    },
    {
      year: 2023,
      brand: 'Honda'
    },
    {
      year: 2024,
      brand: 'Honda'
    },
    {
      year: 2025,
      brand: 'Honda'
    },
    {
      year: 2026,
      brand: 'Honda'
    },
    {
      year: 2027,
      brand: 'Honda'
    },
    {
      year: 2028,
      brand: 'Honda'
    },
    {
      year: 2029,
      brand: 'Honda'
    }
  ];

  products : Product[] = [
    { name: 'Banana' , description: 'ผลไม้' , price : 40},
    { name: 'Apple' , description: 'ผลไม้' , price : 30},
    { name: 'Cherry' , description: 'ผลไม้' , price : 50},
    { name: 'Mango' , description: 'ผลไม้' , price : 100},
    { name: 'Durian' , description: 'ผลไม้' , price : 150},
    { name: 'Melon' , description: 'ผลไม้' , price : 120},
    { name: 'Watermelon' , description: 'ผลไม้' , price : 200}
  ];

  testClick(){
    console.log("Test EventBinding");
  }

  testNumberChange(value:number){
    console.log("Test NumberChange from app action bar :"+value)
  }
  doAppMinChange(value:number){
    console.log("test minChange event: ",value);
  }
  doAppMaxChange(value:number){
    console.log("test maxChange event: ",value);
  }
  pushCustomer(){
    this.customerList.push('customer'+(this.customerList.length+1))
  }
  unshiftCustomer(){
    this.customerList.unshift('customer'+(this.customerList.length+1))
  }
  removeCustomer(index:number){
    this.customerList.splice(index,1);
  }

  filteredProducts: Product[] = this.products;

  searchProduct(text:string){
    this.filteredProducts = this.products.filter(product=>{
      const productName = product.name.toLowerCase();
      const searchName = text.toLowerCase();
      return productName.indexOf(searchName)!==-1
    });
  }
}