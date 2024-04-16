import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vndCurrency',
})
export class VndCurrencyPipe implements PipeTransform {
  transform(value: number): string {
    const formatCurrency = value.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    });
    return formatCurrency.replace('đ', '');
  }
}
