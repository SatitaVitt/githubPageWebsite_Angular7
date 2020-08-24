import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { appRoutingModule } from './app.routing';
import {LoginComponent} from './login';
import { RegisterComponent } from './register';

@NgModule({
    imports: [BrowserModule, appRoutingModule],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
       
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }