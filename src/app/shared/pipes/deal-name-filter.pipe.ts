import { Pipe, PipeTransform } from '@angular/core';
import { Deals } from '@interfaces';
@Pipe({
  name: 'dealNameFilter',
  standalone: true,
})
export class DealNameFilterPipe implements PipeTransform {
  transform(value: Deals[], searchedDeal: string): Deals[] {
    if (!searchedDeal) {
      return value;
    } else {
      return value.filter((deal) =>
        deal.deal_name.toLowerCase().includes(searchedDeal)
      );
    }
  }
}
