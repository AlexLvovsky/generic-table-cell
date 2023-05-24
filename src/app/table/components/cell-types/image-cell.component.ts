import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-image-cell',
  template: `<img [src]="value" alt="Image" width="200" height="100">`,
})
export class ImageCellComponent {
  @Input() value: string;
}
