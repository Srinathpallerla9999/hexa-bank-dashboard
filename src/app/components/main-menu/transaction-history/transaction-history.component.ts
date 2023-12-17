import { Component, OnInit, OnDestroy } from '@angular/core';
import { BankDetailsService } from 'src/app/services/bank-details.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss'],
})
export class TransactionHistoryComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  popupData: any = {};
  searchQuery: string = '';
  filteredTransactions: any = [];

  constructor(private bankDetails: BankDetailsService) { }

  getTransactions: any = [];

  ngOnInit(): void {
    this.subscription = this.bankDetails.storeDetails.subscribe((res: any) => {
      this.getTransactions = res.transactions;
      this.performSearch(); // Call performSearch initially to display all transactions
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  openModel(data: any) {
    document.getElementById('openPopup')?.click();
    this.popupData = data;
  }

  getStatusClass(status: string): any {
    return {
      success: status === 'Success',
      failed: status === 'Failed',
      pending: status === 'Pending',
    };
  }

  performSearch(): void {
    this.filteredTransactions = this.getTransactions.filter((transaction: any) => {
      const searchFields = [transaction.date, transaction.name, transaction.status, transaction.type, transaction.amount];
      return searchFields.some(field => field.toString().toLowerCase().includes(this.searchQuery.toLowerCase()));
    });
  }
}
