import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category/category.service';
import { AppSettings } from '../settings/app.settings';
import { ProductService } from '../services/product/product.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public urlImage = AppSettings.APP_URL_IMG;
  declare categories: any;
  declare products: any;
  declare product:any; 
  ngOnInit(): void {
    this.getAllCategories();
    this.getAllProducts();
  }

  constructor(
    private categoryService: CategoryService, 
    private productService: ProductService,
    private cartService:CartService
    ) {

  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe(
      (data: any) => { console.log(data);
      this.categories = data; }
    )
  }
  getAllProducts() {
    this.productService.getAllProducts().subscribe(
      (data: any) => {
        console.log(data);
        this.products = data;
      }
    )
  }

  addOnCart(idProd: number) {
   // this.getProduct(idProd);
    this.cartService.addToCart(idProd);
    }
  //  getProduct(id:number) {
  //     this. productService.getProduct(id).subscribe(
  //       (data: any) => {
  //         console.log(data);
  //         this.product = data;
  //       }
  //     )
  //   }
}
