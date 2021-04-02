import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';



@Injectable({ //otomatik enjekte ediliyor
  providedIn: 'root'
})
export class CategoryService {
  apiUrl="https://localhost:44398/api/categories/getall";

  constructor(private httpClient: HttpClient) { }

   //ürünleri getirme kodu      
  getCategories():Observable<ListResponseModel<Category>>{  //subscribe olunabilir, response model döneceksin demek
         
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
    }
}

