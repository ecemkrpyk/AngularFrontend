import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder, FormControl,Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
//formbuilder: reactiveformun servisi 

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  
  productAddForm: FormGroup;
  constructor(private formBuilder:FormBuilder, private productService:ProductService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();

  }
  createProductAddForm(){
     this.productAddForm=this.formBuilder.group({
       //ürün eklerken formda olması gereken alanları yazıcaz
                    //"" defaultu
       productName: ["", Validators.required],
       unitPrice: ["", Validators.required],
       unitsInStock: ["", Validators.required],
       categoryId: ["", Validators.required]

     })
  }

  add(){
   //valid=geçerli demek
   if(this.productAddForm.valid){ //geçerli ise
      //producmodel için bir sınıf oluşturuyor, burdaki alanları alıp ekler
      let productModel= Object.assign({},this.productAddForm.value) 
      this.productService.add(productModel).subscribe(response=>{
        
        //obsarvable asenkron çalışır
        this.toastrService.success(response.message, "Başarılı")
      },responseError=>{ //hata varsa
        if(responseError.error.Errors.length>0){
          
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Doğrulama hatası")
            
          }
         
        }

      })
      
   }else{
      this.toastrService.error("Formunuz eksik", "Dikkat")
   }  
  }

}
