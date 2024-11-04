import { Injectable, signal, WritableSignal } from '@angular/core';
import { Deals } from '@interfaces';

@Injectable({providedIn: 'root'})
export class DealService {
  private dealsList: WritableSignal<Deals[]> = signal<Deals[]>([]);

  constructor() {
    this.dealsList.set([
      {
        deal_name: 'Sunset Apartments',
        purchase_price: 1500000,
        address: '123 Sunset Blvd, Los Angeles, CA',
        noi: 120000,
        cap_rate: 8.0,
      },
      {
        deal_name: 'Downtown Office Space',
        purchase_price: 3000000,
        address: '456 Main St, San Francisco, CA',
        noi: 240000,
        cap_rate: 8.0,
      },
      {
        deal_name: 'Riverside Villas',
        purchase_price: 2000000,
        address: '789 River Rd, Austin, TX',
        noi: 160000,
        cap_rate: 8.0,
      },
      {
        deal_name: 'Hilltop Condos',
        purchase_price: 1200000,
        address: '321 Hilltop Ave, Denver, CO',
        noi: 96000,
        cap_rate: 8.0,
      },
      {
        deal_name: 'Beachside Bungalows',
        purchase_price: 1800000,
        address: '654 Ocean Dr, Miami, FL',
        noi: 144000,
        cap_rate: 8.0,
      },
      {
        deal_name: 'Parkview Townhomes',
        purchase_price: 2500000,
        address: '987 Park Ln, Seattle, WA',
        noi: 200000,
        cap_rate: 8.0,
      },
      {
        deal_name: 'Urban Loft Spaces',
        purchase_price: 800000,
        address: '111 Urban St, Chicago, IL',
        noi: 64000,
        cap_rate: 8.0,
      },
      {
        deal_name: 'Lakeside Estates',
        purchase_price: 2200000,
        address: '222 Lakeview Dr, Orlando, FL',
        noi: 176000,
        cap_rate: 8.0,
      },
      {
        deal_name: 'City Center Retail',
        purchase_price: 4000000,
        address: '333 Market St, New York, NY',
        noi: 320000,
        cap_rate: 8.0,
      },
      {
        deal_name: 'Countryside Farms',
        purchase_price: 1400000,
        address: '444 Country Rd, Nashville, TN',
        noi: 112000,
        cap_rate: 8.0,
      },
      {
        deal_name: 'Luxury High-Rise',
        purchase_price: 5000000,
        address: '555 Sky Tower, Boston, MA',
        noi: 400000,
        cap_rate: 8.0,
      },
      {
        deal_name: 'Suburban Family Homes',
        purchase_price: 900000,
        address: '666 Family St, Phoenix, AZ',
        noi: 72000,
        cap_rate: 8.0,
      },
      {
        deal_name: 'Historic District Rentals',
        purchase_price: 1300000,
        address: '777 Heritage St, Philadelphia, PA',
        noi: 104000,
        cap_rate: 8.0,
      },
      {
        deal_name: 'Industrial Park',
        purchase_price: 3500000,
        address: '888 Industrial Way, Detroit, MI',
        noi: 280000,
        cap_rate: 8.0,
      },
      {
        deal_name: 'Eco-Friendly Community',
        purchase_price: 1600000,
        address: '999 Green St, Portland, OR',
        noi: 128000,
        cap_rate: 8.0,
      },
    ]);
  }

  addNewDeal(newDeal: Deals): void {
    this.dealsList.update((deals) => [...deals, newDeal]);
  }

  get allDeals() {
    return this.dealsList;
  }
}
