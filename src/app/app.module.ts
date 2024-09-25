import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruductListComponent } from './product/pruduct-list/pruduct-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ejemplo1Component } from './formularios/ejemplo1/ejemplo1.component';
import { ProductoFilterPipe } from './product/producto-filter.pipe';
import { DistaciaComponent } from './formularios/distacia/distacia.component';

@NgModule({
  declarations: [
    AppComponent,
    PruductListComponent,
    ProductoFilterPipe,
    Ejemplo1Component,
    DistaciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
