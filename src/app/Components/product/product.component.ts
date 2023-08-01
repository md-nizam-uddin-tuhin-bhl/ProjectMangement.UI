import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 product:Product[] =[];
  constructor(private service:ProductService,private router:Router) { }

  ngOnInit(): void {
   this.service.getAllProduct().subscribe({
    next:(product)=>{
      this.product = product
    },
    error:(res)=>{
      console.log(res);
      
    }
   })
  }
  DeletePro(id:string){
    this.service.DeleteProduct(id).subscribe({
      next:()=>{
        let currenUrl = this.router.url;
        this.router.navigateByUrl('/',{skipLocationChange:true})
        .then(()=> {
          this.router.navigate([currenUrl])
        })
      }
    })
  }
}
