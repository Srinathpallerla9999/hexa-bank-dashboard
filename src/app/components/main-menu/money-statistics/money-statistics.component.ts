import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BankDetailsService } from 'src/app/services/bank-details.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";
import { Subscription } from 'rxjs';
import { chartConfig } from 'src/environments/chart.config';

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis | any;
  fill: ApexFill | any;
  tooltip: ApexTooltip | any;
  stroke: ApexStroke | any;
  legend: ApexLegend | any;
};

interface MoneyStatistics {
  [key: string]: {
    value: number;
    trend: number;
    trend_color: string;
  };
}

@Component({
  selector: 'app-money-statistics',
  templateUrl: './money-statistics.component.html',
  styleUrls: ['./money-statistics.component.scss']
})
export class MoneyStatisticsComponent implements OnInit, OnDestroy {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> = chartConfig;

  constructor(private bankDetails: BankDetailsService) {}
  timePeriod = ['Monthly', 'Yearly', 'Weekly'];
  selectTimePeriod = this.timePeriod[0];
  moneyStatictics: MoneyStatistics = {}; // Use the defined type
  subscription!: Subscription
  ngOnInit(): void {
    this.subscription = this.bankDetails.storeDetails.subscribe((res: any) => {
      this.moneyStatictics = res.money_statistics
    })
  }

  checkTimePeriod(data: any) {
    console.log(data);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
