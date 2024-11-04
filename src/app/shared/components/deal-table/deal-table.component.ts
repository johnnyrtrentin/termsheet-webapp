import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { DealService } from '@services';
import { DealNameFilterPipe, DealValuesFilterPipe } from '@pipes';
import { NewDealDialog } from '../deal-dialog/deal-dialog.component';

@Component({
  standalone: true,
  selector: 'app-deal-table',
  imports: [
    CommonModule,
    MatTableModule,
    NewDealDialog,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    CurrencyPipe,
    DealNameFilterPipe,
    DealValuesFilterPipe,
  ],
  styleUrl: './deal-table.component.scss',
  template: `
    <ng-container class="deal-table">
      <div class="deal-table__header">
        <div class="deal-table__filter-name">
          <mat-form-field>
            <mat-label>Filter deal name</mat-label>
            <input matInput type="text" [(ngModel)]="dealNameSearched" />

            @if (dealNameSearched) {
            <button
              matSuffix
              mat-icon-button
              aria-label="Clear"
              (click)="dealNameSearched = ''"
            >
              <mat-icon>close</mat-icon>
            </button>
            }
          </mat-form-field>
        </div>
        <div class="deal-table__filter-values">
          <mat-form-field>
            <mat-label>Min deal price</mat-label>
            <span matTextPrefix>$</span>
            <input matInput type="text" [(ngModel)]="dealMinPrice" />
          </mat-form-field>
          <mat-form-field>
            <mat-label>max deal price</mat-label>
            <span matTextPrefix>$</span>
            <input matInput type="text" [(ngModel)]="dealMaxPrice" />
          </mat-form-field>
        </div>

        <app-new-deal-dialog></app-new-deal-dialog>
      </div>
      <table
        mat-table
        [dataSource]="
          this.dealService.allDeals()
            | dealNameFilter : dealNameSearched
            | dealValuesFilter : dealMinPrice() : dealMaxPrice()
        "
        class="mat-elevation-z8"
      >
        <ng-container matColumnDef="Deal Name">
          <th mat-header-cell *matHeaderCellDef>Deal Name</th>
          <td mat-cell *matCellDef="let element">{{ element.deal_name }}</td>
        </ng-container>

        <ng-container matColumnDef="Purchase Price">
          <th mat-header-cell *matHeaderCellDef>Purchase Price</th>
          <td mat-cell *matCellDef="let element">
            {{ element.purchase_price | currency : 'USD' }}
          </td>
        </ng-container>

        <ng-container matColumnDef="Address">
          <th mat-header-cell *matHeaderCellDef>Address</th>
          <td mat-cell *matCellDef="let element">{{ element.address }}</td>
        </ng-container>

        <ng-container matColumnDef="NOI">
          <th mat-header-cell *matHeaderCellDef>NOI</th>
          <td mat-cell *matCellDef="let element">
            {{ element.noi | currency : 'USD' }}
          </td>
        </ng-container>

        <ng-container matColumnDef="Cap Rate">
          <th mat-header-cell *matHeaderCellDef>Cap Rate</th>
          <td mat-cell *matCellDef="let element">{{ element.cap_rate }}%</td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>
    </ng-container>
  `,
})
export class DealTableComponent {
  public readonly dealService = inject(DealService);

  public dealMinPrice = signal(0);
  public dealMaxPrice = signal(0);
  public dealNameSearched = '';

  public displayedColumns: string[] = [
    'Deal Name',
    'Purchase Price',
    'Address',
    'NOI',
    'Cap Rate',
  ];
}
