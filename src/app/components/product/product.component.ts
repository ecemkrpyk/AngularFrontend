import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http'
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ThisReceiver } from '@angular/compiler';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[]=[];
  dataLoaded=false; //backenden veri çekerkenki data
  filterText="";
 

  constructor(private productService:ProductService, 
    private activatedRoute:ActivatedRoute,
    private toastrService: ToastrService,
    private cartService:CartService) { }

  ngOnInit(): void {  
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
     })
  }

  getProducts(){ //ürünleri getirme kodu, getproductsa subscribe ol demek            
      this.productService.getProducts().subscribe(response=>{
        this.products=response.data
        this.dataLoaded=true; //data yüklendiği an true olur
      })
  }
  getProductsByCategory(categoryId:number){             
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true; //data yüklendiği an true olur
    })
  }
  addToCart(product:Product){
   
      this.toastrService.success("Sepete eklendi", product.productName)
      this.cartService.addToCart(product);
    
    
  }

}
