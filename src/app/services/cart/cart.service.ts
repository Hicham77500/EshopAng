import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 

  constructor() { }
   addToCart(idProd: number) {
    if (!localStorage.getItem('cart')) {
      let qty = 1;
      let cartLine =  {idProd,qty}
     localStorage.setItem('cart', JSON.stringify(cartLine))
    console.log(cartLine);
    
    }else{
      console.log('existe')
      console.log(localStorage.getItem('cart'));
      let temp = JSON.parse(localStorage.getItem('cart') as any) 
      console.log(temp);
      
    }
  }
}
