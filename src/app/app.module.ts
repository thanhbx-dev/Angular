import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from './header/header.component';
import {CategoryComponent} from './category/category.component';
import {SlideComponent} from './frontend/slide/slide.component';
import {FooterComponent} from './footer/footer.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductComponent} from './product/product.component';
import {FormsModule} from "@angular/forms";
import {ProductService} from "./product.service";
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {AdminComponent} from './backend/admin/admin.component';
import {DashboardComponent} from './backend/dashboard/dashboard.component';
import {ProductManagerComponent} from './backend/product-manager/product-manager.component';
import {CategoryManagerComponent} from './backend/category-manager/category-manager.component';
import {HttpClientModule} from "@angular/common/http";
import { AddProductComponent } from './backend/add-product/add-product.component';
import { EditProductComponent } from './backend/edit-product/edit-product.component';
import { EditCategoryComponent } from './backend/edit-category/edit-category.component';
import { AddCategoryComponent } from './backend/add-category/add-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    SlideComponent,
    FooterComponent,
    ProductListComponent,
    ProductComponent,
    ProductAddComponent,
    ProductDetailComponent,
    AdminComponent,
    DashboardComponent,
    ProductManagerComponent,
    CategoryManagerComponent,
    AddProductComponent,
    EditProductComponent,
    EditCategoryComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
