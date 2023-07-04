import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { AppSettings } from '../../settings/app.settings';
import { ProductService } from '../../services/product/product.service';
import { CartService } from '../../services/cart/cart.service';
import { Product } from '../../models/product';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public urlImage = AppSettings.APP_URL_IMG;
  declare categories: any;
  declare products: any;
  declare product: any;
  ngOnInit(): void {
    this.getAllCategories();
    this.getAllProducts();

  }

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private cartService: CartService,
    private authenticationService: AuthenticationService
  ) {

  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe(
      (data: any) => {

        this.categories = data;
      }
    )
  }
  getAllProducts() {
    this.productService.getAllProducts().subscribe(
      (data: any) => {

        this.products = data;
      }
    )
  }

  addOnCart(item: any) {
    //  this.getProduct(Product);
    console.log(item);
    
    this.cartService.addToCart(item.idProd);


  }
  getProduct(product: any) {
    this.productService.getAllProducts().subscribe(
      (data: any) => {
        console.log(data);
        this.product = data;
      }
    )
  }
}
