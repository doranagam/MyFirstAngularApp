import { Route } from '@angular/compiler/src/core';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { RegistrationComponent } from './registration/registration.component';
const route: Routes = [
    {
        path: 'Registrtion', loadChildren: './Registration/registration.module#RegistrationModule'
    },
    {
        path: 'Products', component: ProductsComponent
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(route)

    ]
    
})
export class AppRoutingModule {

}