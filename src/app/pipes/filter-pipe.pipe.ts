import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  //değişime uğramasını istediğim data productun tamamı ve bize yine product array döndürecek
  transform(value: Product[], filterText: string): Product[] {
                                    //küçük büyük harf duyarlılığı için, filtertext varsa küçük harfe çevir
    filterText=filterText?filterText.toLocaleLowerCase():""
                        //her bir ürünü tek tek dolaşıyor,bir indexin içinde filtertext var mı,yoksa value yi döndürür hiç bozmadan
    return filterText? value
    .filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value;
  }

}
