import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  updateProduct:Product ={
    id:'',
    name:'',
    type:'',
    color:'',
    price:0
  
   }
  constructor(private service:ProductService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(param)=>{
        const id = param.get('id');
        if(id){
          this.service.getProduct(id).subscribe({
              next:(res)=>{
                this.updateProduct = res
              }
          })
      }
    } 
    })
    
  }
  onSubmit(){
    this.service.UpdateProduct(this.updateProduct.id, this.updateProduct).subscribe({
        next:()=>{
          this.router.navigate(['product'])
        },
        error:(res)=>{
          console.log(res);
        }
    })
  }
}
