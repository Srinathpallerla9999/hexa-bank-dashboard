import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankDetailsService {

  constructor(private httpClient: HttpClient) { }

  storeDetails = new Subject<any>();
  getBankDetailsService() {
    return this.httpClient.get(environment.baseApi)
  }


  getBankDetails() {
    this.getBankDetailsService().subscribe((res: any) => {
      this.storeDetails.next(res);
    });
  }
}