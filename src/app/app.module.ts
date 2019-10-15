import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import {  
  AgmCoreModule  
} from '@agm/core'; 
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadModule } from '@progress/kendo-angular-upload';
import { AppComponent } from './app.component';

import { UploadComponent } from './upload/upload.component';
import { EventLogComponent } from './event-log/event-log.component';
import { ImgComponent } from './img/img.component';
import { AddnewComponent } from './addnew/addnew.component';
import { PracticeComponent } from './practice/practice.component';

import { FaqsComponent } from './faqs/faqs.component';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    UploadComponent,
    EventLogComponent,
    ImgComponent,
    AddnewComponent,
    PracticeComponent,
    FaqsComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ScrollingModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    MultiSelectAllModule,
    MultiSelectModule,
    ButtonModule,
    HttpClientModule,
    AgmCoreModule.forRoot({  
      apiKey: 'Your Google Api Key'  }),
    UploadModule 
    
   
    
 
  ],

  exports: [DemoComponent],
  providers: [],
  bootstrap: [AppComponent,DemoComponent]
})
export class AppModule { }
