import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../shared module/material-module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxGraphComponent } from './ngx-graph.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  entryComponents: [],
  providers:[NgxGraphComponent]
})
export class NgxModule { }
