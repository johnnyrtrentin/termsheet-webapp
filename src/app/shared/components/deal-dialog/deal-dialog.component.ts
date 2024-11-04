import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { DealService } from '@services';

@Component({
  standalone: true,
  selector: 'app-new-deal-dialog',
  imports: [MatButtonModule, FormsModule],
  template: `<button mat-flat-button (click)="openNewDealDialog()">
    Add new Deal
  </button>`,
})
export class NewDealDialog {
  private dialog = inject(MatDialog);

  openNewDealDialog(): void {
    this.dialog.open(DealDialog, { maxWidth: 800, width: '500px' });
  }
}

@Component({
  standalone: true,
  selector: 'app-deal-dialog',
  styleUrl: './deal-dialog.component.scss',
  templateUrl: './deal-dialog.component.html',
  imports: [MatDialogModule, MatButtonModule, MatInputModule, FormsModule],
})
export class DealDialog {
  readonly dealName = model('');
  readonly dealPrice = model(0);
  readonly dealAddress = model('');
  readonly dealNoi = model(0);
  readonly dealCapRate = model(0);

  private dealService = inject(DealService);

  readonly dialogRef = inject(MatDialogRef<DealDialog>);

  addNewDeal(): void {
    this.dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const capRateValue = this.dealNoi() / this.dealPrice();
        const captRateCalculated = +(capRateValue * 1000).toFixed(0);

        this.dealService.addNewDeal({
          deal_name: this.dealName(),
          address: this.dealAddress(),
          purchase_price: this.dealPrice(),
          noi: this.dealNoi(),
          cap_rate: this.dealCapRate()
            ? this.dealCapRate()
            : captRateCalculated,
        });
      }
    });
  }
}
