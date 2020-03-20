import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxGraphComponent } from './ngx-graph/ngx-graph.component';
import { NgxModule } from './ngx-graph/ngx-graph.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { DemoMaterialModule } from './shared module/material-module';


@NgModule({
  imports: [ BrowserModule, 
                  FormsModule, 
                  NgxModule, 
                  NgxGraphModule, 
                  NgxChartsModule, 
                  DemoMaterialModule,
                  ReactiveFormsModule],
  declarations: [ AppComponent, NgxGraphComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
