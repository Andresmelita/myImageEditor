import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemoveBackGroundComponent } from './components/remove-back-ground/remove-back-ground.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {CloudinaryModule} from '@cloudinary/ng';

@NgModule({
  declarations: [
    AppComponent,
    RemoveBackGroundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CloudinaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
