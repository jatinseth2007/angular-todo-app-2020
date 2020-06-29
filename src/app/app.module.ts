import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { TodoModuleModule } from "src/app/customModules/todo-module/todo-module.module";

import { AppComponent } from './app.component';
import { FormlyTestComponent } from 'src/app/components/formly-test/formly-test.component';

import { DataServiceService } from 'src/app/services/dataService/data-service.service';

@NgModule({
    declarations: [
        AppComponent,
        FormlyTestComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TodoModuleModule,
        ReactiveFormsModule,
        FormlyModule.forRoot(),
        FormlyBootstrapModule,
        NgbModule
    ],
    providers: [DataServiceService],
    bootstrap: [AppComponent]
})
export class AppModule { }
