import {Component, OnInit} from '@angular/core';
import {Product} from 'src/app/entity/product';
import {ProductService} from 'src/app/services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CartItem} from 'src/app/entity/cart-item';
import {CartService} from 'src/app/services/cart.service';
@Component({selector: 'app-product-grid', templateUrl: './product-grid.component.html', styleUrls: ['./product-grid.component.css']})
export class ProductGridComponent implements OnInit {
    productsByCategoryId : Product[];
    constructor(private productService : ProductService, private activatedRoutes : ActivatedRoute, private route : Router, private cartService : CartService) {}

    ngOnInit() : void {
        this.productsByCategory(this.activatedRoutes.snapshot.paramMap.get('categoryId'));
    }
    productsByCategory(categoryId) : void {
        this
            .productService
            .getProductsByCategoryId(categoryId)
            .subscribe(data => {
                this.productsByCategoryId = data;

            }, error => {
                console.log(error);
            });
    }
    addToCart(theProduct : Product) {
        const theCartItem = new CartItem(theProduct);
        console.log("theCartItem" + theCartItem.productId);
        this
            .cartService
            .addToCart(theCartItem);
    }
}
