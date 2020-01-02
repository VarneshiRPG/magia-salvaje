import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  filterString = "";
  filtered;

  invoices:any[] =[
    {
      number_invoice: '996',
      note_invoice: '0001',
      state_invoice: 'pending',
      customer_invoice: 'Johan Corrales',
      date_invoice: '2018-10-30',
      days_invoice: '30',
      expiration_invoice: '2018-11-30',
      payment_invoice: 'Credit'
    },
    {
      number_invoice: '997',
      note_invoice: 'N/A',
      state_invoice: 'Pay out',
      customer_invoice: 'Richard Castle',
      date_invoice: '2018-10-30',
      days_invoice: '0',
      expiration_invoice: 'N/A',
      payment_invoice: 'Credit'
    },
    {
      number_invoice: '998',
      note_invoice: 'N/A',
      state_invoice: 'pending',
      customer_invoice: 'Kyara Wolff',
      date_invoice: '2018-10-30',
      days_invoice: '30',
      expiration_invoice: '2018-11-30',
      payment_invoice: 'Credit'
    },
    {
      number_invoice: '999',
      note_invoice: 'N/A',
      state_invoice: 'pending',
      customer_invoice: 'Donaldo Trumpete',
      date_invoice: '2018-10-30',
      days_invoice: '30',
      expiration_invoice: '2018-11-30',
      payment_invoice: 'Credit'
    },
    {
      number_invoice: '1000',
      note_invoice: '0001',
      state_invoice: 'pending',
      customer_invoice: 'Mark Wahlber',
      date_invoice: '2018-10-30',
      days_invoice: '30',
      expiration_invoice: '2018-11-30',
      payment_invoice: 'Cash'
    },
    {
      number_invoice: '1001',
      note_invoice: 'N/A',
      state_invoice: 'Pay out',
      customer_invoice: 'Ryan Reynolds',
      date_invoice: '2018-10-30',
      days_invoice: '0',
      expiration_invoice: 'N/A',
      payment_invoice: 'Cash'
    },
  ]

  ngOnInit() {
    this.onFilterChange();
  }

  onFilterChange() {
    this.filtered = this.invoices.filter((invoice) => this.isMatch(invoice));
  }

  isMatch(item) {
    if (item instanceof Object) {
      return Object.keys(item).some((k) => this.isMatch(item[k]));
    } else {
      return item.toString().indexOf(this.filterString) > -1
    }
  }
}
