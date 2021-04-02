import { Injectable } from '@angular/core';
import { ProductComponent } from '../components/product/product.component';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  
  addToCart (product:Product){
    //eklenecek eleman sepette var mı?
    let item= CartItems.find(c=>c.product.productId===product.productId);

    if(item){
      item.quantity +=1;  //adedi 1 arttırır
    }else{
      let cartItem=new CartItem();
      cartItem.product=product;
      cartItem.quantity=1;
      //yoksa ekler o zaman
      CartItems.push(cartItem)
    }
  }
  
  removeFromCart(product:Product){
    //sepette önce elemanı buldum
    let item:CartItem = CartItems.find(c=>c.product.productId===product.productId);
    CartItems.splice(CartItems.indexOf(item),1); //belirli indexten,kaç eleman sileceksek
  }
  list(): CartItem[]{ //sepeti döndürecek
    return CartItems;
  }
}
