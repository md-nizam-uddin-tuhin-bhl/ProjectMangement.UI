import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 addNewProduct:Product ={
  id:'',
  name:'',
  type:'',
  color:'',
  price:0

 }
  constructor(private service:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.service.addProduct(this.addNewProduct).subscribe({
      next:()=>{
        this.router.navigate(['product'])
      },
      error:(res)=>{
        console.log(res);
        
      }
    })
  }
}

 
