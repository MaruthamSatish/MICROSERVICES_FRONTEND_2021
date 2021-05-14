import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/entity/category';
import { Product } from 'src/app/entity/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories: Category[];
  productsByCategory: Product[];
  constructor(private activatedRoutes: ActivatedRoute, private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRoutes.paramMap.subscribe(() => {
      this.getCategoryList();
    });

  }
  getCategoryList() {
    const hasCategoryId: boolean = this.activatedRoutes.snapshot.paramMap.has('categoryId');
    // this.categoryResourceId  =+this.activatedRoutes.snapshot.paramMap.get();
    this.categoryService.getCategoryList().subscribe(
      data => {
        this.categories = data;
      })
  }
  productsByCategoryId(category: any) {
    const categoryId = +this.activatedRoutes.snapshot.paramMap.get(category.categoryId);
    this.productService.getProductsByCategoryId(category.categoryId).subscribe(data => {
      this.productsByCategory = data;

    })
  }
  searchProductByName(searchKey: string){
    console.log(searchKey);
  }
}
