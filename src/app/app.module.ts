import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FirstChildComponent } from './first-child/first-child.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    FirstChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [FirstComponent]
})
export class AppModule { }
