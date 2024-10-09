import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruductListComponent } from './product/pruduct-list/pruduct-list.component';
import { Ejemplo1Component } from './formularios/ejemplo1/ejemplo1.component';
import { ProductoFilterPipe } from './product/producto-filter.pipe';
import { DistaciaComponent } from './formularios/distacia/distacia.component';
import { ZodiacooComponent } from './formularios/zodiacoo/zodiacoo.component';

@NgModule({
  declarations: [
    AppComponent,
    PruductListComponent,
    ProductoFilterPipe,
    Ejemplo1Component,
    DistaciaComponent,
    ZodiacooComponent
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
