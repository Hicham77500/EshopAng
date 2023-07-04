import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public grandTotal: number = 0;
  totalamount: Number = 0;

  constructor() { }

  addToCart(idProd: number) {
    if (!localStorage.getItem('cart')) {
      let qty = 1;
      let cartLine = { idProd, qty }
      localStorage.setItem('cart', JSON.stringify(cartLine))
      console.log(cartLine);

    } else {
      console.log('existe')
      let temp = JSON.parse(localStorage.getItem('cart') as any)
      if (temp["idProd"] == idProd) {
        temp["qty"]++;
        localStorage.setItem('cart', JSON.stringify(temp))
        console.log(localStorage.getItem('cart'));
      }else{
        let qty = 1;
      let cartLine = { idProd, qty }
        temp.add(cartLine);

      }
      
      
      console.log(temp["idProd"]);

    }
}}

    // addToCart(product:Product) {

    //   // Vérifier si le produit existe déjà dans le panier
    //   const existingProduct = this.cartItems.findIndex(item => item.idProd === product.idProd);
    //     console.log('existingProduct', existingProduct);
    //     console.log(this.cartItems)

    //   if (existingProduct) {
    //     // Si le produit existe déjà, augmenter la quantité
    //     this.cartItems[existingProduct].quantity++;
    //   } else {
    //     // Sinon, ajouter le produit avec une quantité de 1
    //     const newProduct = { ...product};
    //     console.log('newProduct', newProduct);
    //     this.cartItems.push(newProduct);
    //   }

    //   console.log(product);
    // }
    /* getTotal(){
        let total = 0;
        for(var i = 0; i < this.cartItemList.length; i++) {
            if (this.cartItemList[i].price) {
                total += this.cartItemList[i].price ;
                this.totalamount = total;
            }
        }
        return total;
    }
    addToCart(product: any){
      // Pour stocker le panier
  localStorage.setItem('cart', JSON.stringify(this.cartItemList));
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      this.getTotal(); 
      
      console.log(this.cartItemList);
      console.log(this.getTotal());
  
    }
    setProduct(product: any){
      // ... = mettre à la suite
      this.cartItemList.push(...product);
      this.productList.next(product);
      
  
      
    }
    getProducts(){
      return this.productList.asObservable();
      
    }
    inc(product:Product){
      for (let i in this.cartItemList){
        if (this.cartItemList[i].id === product.idProd) {
          this.cartItemList[i].quantity++
          break;
        }
      }
   
  } */
    /* removeCartItem(product:any){
      this.cartItemList.map(
        (a:any, index: any)=>{
          if(product.id==a.id){
            this.cartItemList.splice(index,1);
          }
        }
      );
      this.productList.next(this.cartItemList);
    } */


 