import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { BrazilComponent } from './screens/brazil/brazil.component';
import { WorldComponent } from './screens/world/world.component';
import { HttpClientModule } from '@angular/common/http';
import { HistogramComponent } from './components/histogram/histogram.component';


@NgModule({
  declarations: [
    AppComponent,
    BrazilComponent,
    WorldComponent,
    HistogramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
