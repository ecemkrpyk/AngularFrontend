import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  categories:Category[]=[]; //boş bir array 
  currentCategory:Category;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){ //ürünleri getirme kodu, getproductsa subscribe ol demek            
    this.categoryService.getCategories().subscribe(response=>{
      this.categories=response.data

    })
  }
  setCurrentCategory(category:Category){
    this.currentCategory=category;
  }
  getCurrentCategoryClass(category: Category){
     if(category==this.currentCategory){ //tıkladığımız şuanki kategoriye eşitse orasını aktif eder
       return "list-group-item active"
     } else{
      return "list-group-item"
     }
  }
 
    getAllCategoryClass(){
     if(!this.currentCategory){ //currentcategoryim yoksa
      return "list-group-item active"
     }else{
      return "list-group-item" //varsa aktif olmayacak
     }
   }
}

