import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-button-cell',
  template: `<button>{{ value }}</button>`,
})
export class ButtonCellComponent {
  @Input() value: string;
}
