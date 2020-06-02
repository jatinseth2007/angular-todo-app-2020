import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoModuleModule } from "src/app/customModules/todo-module/todo-module.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TodoModuleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
