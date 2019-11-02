import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommitmentComponent } from './commitment/commitment.component';
import { WatchComponent } from './watch/watch.component';
import { PriceComponent } from './price/price.component';
import { FooturComponent } from './footur/footur.component';
import { DownloadComponent } from './download/download.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    CommitmentComponent,
    WatchComponent,
    PriceComponent,
    FooturComponent,
    DownloadComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
