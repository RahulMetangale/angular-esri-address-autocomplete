import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SuggestComponent } from "./suggest/suggest.component";
import { SuggestService } from './suggest/suggest.service';

@NgModule({
  declarations: [AppComponent, SuggestComponent],
  imports: [BrowserModule,
    ReactiveFormsModule,
    HttpClientModule],
  providers: [SuggestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
