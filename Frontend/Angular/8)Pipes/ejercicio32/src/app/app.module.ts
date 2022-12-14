import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UppercaseFirstLetterOfWordPipe } from './pipes/uppercase-first-letter-of-word.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UppercaseFirstLetterOfWordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
