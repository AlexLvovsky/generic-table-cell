import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextCellComponent } from './components/cell-types/text-cell.component';
import { ButtonCellComponent } from './components/cell-types/button-cell.component';
import { ImageCellComponent } from './components/cell-types/image-cell.component';
import { CheckboxCellComponent } from './components/cell-types/checkbox-cell.component';
import { TableComponent } from './components/table.component';
import { TableCellComponent } from './components/table-cell.component';

@NgModule({
  declarations: [
    TableComponent,
    TableCellComponent,
    TextCellComponent,
    ButtonCellComponent,
    ImageCellComponent,
    CheckboxCellComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TableComponent,
    TableCellComponent,
    TextCellComponent,
    ButtonCellComponent,
    ImageCellComponent,
    CheckboxCellComponent,
  ],
})
export class TableModule {}
