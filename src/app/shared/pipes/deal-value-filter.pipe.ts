import { Pipe, PipeTransform } from '@angular/core';
import { Deals } from '@interfaces';
@Pipe({
  name: 'dealValuesFilter',
  standalone: true,
})
export class DealValuesFilterPipe implements PipeTransform {
  transform(value: Deals[], minPrice: number, maxPrice: number): Deals[] {
    if (!minPrice && !maxPrice) {
      return value;
    } else {
      return value.filter((deal) => {
        return (
          deal.purchase_price >= minPrice && deal.purchase_price <= maxPrice
        );
      });
    }
  }
}
