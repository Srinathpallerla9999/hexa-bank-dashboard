import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { CardsComponent } from './components/main-menu/cards/cards.component';
import { MoneyStatisticsComponent } from './components/main-menu/money-statistics/money-statistics.component';
import { TotalBalanceComponent } from './components/main-menu/total-balance/total-balance.component';
import { TransactionHistoryComponent } from './components/main-menu/transaction-history/transaction-history.component';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { TextManipulationPipe } from './pipes/text-manipulation.pipe';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    MainMenuComponent,
    CardsComponent,
    MoneyStatisticsComponent,
    TotalBalanceComponent,
    TransactionHistoryComponent,
    TextManipulationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
