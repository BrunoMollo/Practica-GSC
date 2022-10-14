import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { HideOnHoverDirective } from './hide-on-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    HideOnHoverDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
