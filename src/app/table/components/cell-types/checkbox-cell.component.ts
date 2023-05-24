import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-checkbox-cell',
  template: `<input type="checkbox" [checked]="value" disabled>`,
})
export class CheckboxCellComponent {
  @Input() value: boolean;
}
