import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';
const route: Routes = [{ path: '', component: RegistrationComponent }]
@NgModule({
    declarations: [RegistrationComponent],
    imports: [
        
        CommonModule,
        RouterModule.forChild(route), 
        RouterModule,
        FormsModule,
        ReactiveFormsModule],
    providers: []

})
export class RegistrationModule {

}