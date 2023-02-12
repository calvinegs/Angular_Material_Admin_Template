import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareMaterialModule } from './shared/share-material.module';
import { FlexboxComponent } from './components/flexbox/flexbox.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
