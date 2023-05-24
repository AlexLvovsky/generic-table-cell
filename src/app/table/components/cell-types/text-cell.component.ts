import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-text-cell',
  template: `{{ value }}`,
})
export class TextCellComponent {
  @Input() value: string;
}
