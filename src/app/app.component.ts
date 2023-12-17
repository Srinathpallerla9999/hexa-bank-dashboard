import { Component, OnInit } from '@angular/core';
import { BankDetailsService } from './services/bank-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hexa-bank-dashboard';

  constructor(private bankDetails: BankDetailsService) { }
  ngOnInit() {
    this.bankDetails.getBankDetails()
  }
}
