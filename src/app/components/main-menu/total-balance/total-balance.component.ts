import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BankDetailsService } from 'src/app/services/bank-details.service';

@Component({
  selector: 'app-total-balance',
  templateUrl: './total-balance.component.html',
  styleUrls: ['./total-balance.component.scss']
})
export class TotalBalanceComponent implements OnInit, OnDestroy {

  constructor(public bankDetails: BankDetailsService) { }
  totalData: any = [];
  subscription!: Subscription;

  ngOnInit(): void {
    this.bankDetails.storeDetails.subscribe((res: any) => {
      this.totalData = res.balance
    })
  }


  getProgressBarColor(): string {
    const paymentDoneSoFar = this.totalData?.payment_done_so_far || 0;
    const monthlyPaymentLimit = this.totalData?.monthly_payment_limit || 1;
    const progressPercentage = (paymentDoneSoFar / monthlyPaymentLimit) * 100;
    const colorStop = `linear-gradient(to right, #2d2d5f ${progressPercentage}%, #e0e0e0 ${progressPercentage}%)`;
    return colorStop;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
