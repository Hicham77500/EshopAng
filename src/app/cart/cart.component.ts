import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { CategoryService } from '../services/category/category.service';
import { ProductService } from '../services/product/product.service';
import { AppSettings } from '../settings/app.settings';
import { Product } from '../models/product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  declare cartItem: any[];
  declare categories: any;
  declare products: any;
  declare product:any;
  public urlImage = AppSettings.APP_URL_IMG;
  public produit: any=[];
  public grandTotal:number =0;
  public produitList : any;
  public orderList: any=[];
  public stockQty: number = 1;
  public id : number = 1;
  public paymentHandler: any = null;
  cart: any;
  
  constructor(
    private cartService:CartService ) {

  }
  ngOnInit(): void {

 this.cart = this.getcartItem();
  
    this.cartService.getProducts()
     //this.orderService.getAllOrders()
     .subscribe(
      res =>{
        console.log(res);
        // when initializing an item with id:
        this.product = res;     
        this.grandTotal = this.cartService.getTotal();
      

      }
    );
  }
  getAllCartItems() {
  console.log(this.cartService.cartItemList) 
  }
  incProduct(item:any) {
    
    this.cartService.inc(item);
  
}
getcartItem(){
  const cartData = localStorage.getItem('cart');
  if (cartData !== null) {
    const cart = JSON.parse(cartData);
    // Utilisez le panier récupéré comme nécessaire
    
    return cart;
  } else {
    // Le panier n'existe pas dans le Local Storage
   return console.log('le panier n' + 'existe pas dans le Local Storage');
    
  }
}

decProduct() {
 
  this.stockQty --;

}
removeCartItem(idProd:number) {
  const productIdToRemove = idProd; // Remplacez par l'ID du produit que je veux supprimer

  const cartData = localStorage.getItem('cart');
  if (cartData !== null) {
    const cart: Product[] = JSON.parse(cartData);
  const productIndex = cart.findIndex((item: { idProd: number; }) => item.idProd === productIdToRemove);
  
    if (productIndex !== -1) {
      cart.splice(productIndex, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }
  window.location.reload();
}
// removeFromCart(product:any){
//   this.cartService.removeProduct(product);
// }
}
