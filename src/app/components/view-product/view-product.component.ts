import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { CategoryService } from '../../services/category/category.service';
import { AppSettings } from '../../settings/app.settings';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
  public urlImage = AppSettings.APP_URL_IMG;
  declare categories: any;
  declare products: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);

    this.getProduct(id);

  }
  getCategory(id: number) {
    this.categoryService.getCategory(id).subscribe(
      (data: any) => {
        console.log(data);
        this.categories = data;
      }
    )
  }
  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      (data: any) => {
        console.log(data);
        this.products = data;
        this.getCategory(data.idCat);
      }
    )
  }

}
