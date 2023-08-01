import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 baseapiUrl ="http://localhost:5068";
 constructor(private http:HttpClient) { }
 getAllProduct():Observable<Product[]>{
  return this.http.get<Product[]>(this.baseapiUrl+'/api/products')
 }
 addProduct(addNewProduct:Product):Observable<Product>{
  addNewProduct.id = '00000000-0000-0000-0000-000000000000';
  return this.http.post<Product>(this.baseapiUrl+'/api/products',addNewProduct)
 }
 getProduct(id:string):Observable<Product>{
  return this.http.get<Product>(this.baseapiUrl+'/api/products/'+id)
 }

 UpdateProduct(id:string,updatePrduct:Product):Observable<Product>{
  return this.http.put<Product>(this.baseapiUrl+'/api/products/'+id,updatePrduct)
 }
 DeleteProduct(id:string):Observable<Product>{
  return this.http.delete<Product>(this.baseapiUrl+'/api/products/'+id)
 }
}
