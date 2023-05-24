import { Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-table',
  template: `
    <table class="custom-table">
      <thead>
        <tr>
          <th *ngFor="let header of headers">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of rows">
          <td *ngFor="let cell of row">
            <ng-container *ngTemplateOutlet="cellTemplate; context: { $implicit: cell }"></ng-container>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [`
    .custom-table {
      width: 100%;
      border-collapse: collapse;
      font-family: Arial, sans-serif;
    }

    .custom-table th,
    .custom-table td {
      padding: 8px;
      border: 1px solid #ccc;
    }

    .custom-table th {
      background-color: #f2f2f2;
      font-weight: bold;
    }

    .custom-table td {
      text-align: center;
    }
  `],
})
export class TableComponent {
  @Input() headers: string[];
  @Input() rows: any;

  @ContentChild(TemplateRef) cellTemplate: TemplateRef<any>;
}
