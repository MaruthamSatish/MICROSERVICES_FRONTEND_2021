import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductComponent } from './components/product/product.component';



const routes: Routes = [{ path:'Men/:categoryId', component:ProductGridComponent },
{ path:'Women/:categoryId', component:ProductGridComponent },
{ path:'products/:productId', component:ProductComponent },
{ path:'Kids/:categoryId', component:ProductGridComponent },
{ path:'mobile/:categoryId', component:ProductGridComponent },
{ path:'home', component:MainComponent },
{ path:'', redirectTo:'/home',pathMatch:'full'},
{ path:'**', redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
