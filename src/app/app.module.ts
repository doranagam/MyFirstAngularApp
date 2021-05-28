import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './app.Routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,    
    ProductsComponent
  ],
  imports: [   
    BrowserModule,     
    AppRoutingModule,    
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
