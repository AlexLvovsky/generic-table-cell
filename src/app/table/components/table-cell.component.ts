import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ButtonCellComponent, CheckboxCellComponent, ImageCellComponent, TextCellComponent } from './cell-types';

export interface TableCell {
  type: string;
  value: any;
}

// Define interface for cell types and component types mapping
interface CellComponentTypes {
  [key: string]: any;
}

@Component({
  selector: 'app-table-cell',
  template: `<ng-container #container></ng-container>`,
})
export class TableCellComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef, static: true }) container: ViewContainerRef;

  constructor(private viewContainerRef: ViewContainerRef) {}
  @Input() content: any;

  ngOnInit() {
    this.loadComponent();
  }

  private loadComponent() {
    this.container.clear();
  
    const componentRef = this.viewContainerRef.createComponent(this.getComponentType());
    (componentRef.instance as any).value = this.content.value;
  }

  private getComponentType() {
    const componentTypes: CellComponentTypes = {
      button: ButtonCellComponent,
      image: ImageCellComponent,
      checkbox: CheckboxCellComponent,
    };

    return componentTypes[this.content.type] || TextCellComponent;
  }
}
