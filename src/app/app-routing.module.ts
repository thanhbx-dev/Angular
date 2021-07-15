import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {AdminComponent} from "./backend/admin/admin.component";
import {DashboardComponent} from "./backend/dashboard/dashboard.component";
import {ProductManagerComponent} from "./backend/product-manager/product-manager.component";
import {CategoryManagerComponent} from "./backend/category-manager/category-manager.component";
import {AddProductComponent} from "./backend/add-product/add-product.component";
import {AddCategoryComponent} from "./backend/add-category/add-category.component";
import {EditProductComponent} from "./backend/edit-product/edit-product.component";
import {EditCategoryComponent} from "./backend/edit-category/edit-category.component";

const routes: Routes = [
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'admin', component: AdminComponent,
    children: [
      {path: '', redirectTo: 'dashboard',pathMatch:'full'},
      {path:'dashboard',component:DashboardComponent},
      {path:'products',component:ProductManagerComponent},
      {path:'categories',component:CategoryManagerComponent},
      {path:'add-product',component:AddProductComponent},
      {path:'add-category',component:AddCategoryComponent},
      {path:'edit-product/:id',component:EditProductComponent},
      {path:'edit-category/:id',component:EditCategoryComponent}
    ]
  },
  {path: 'add', component: ProductAddComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'product/:id', component: ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
