import { Component } from '@angular/core';
import { TableCell } from 'src/app/table/components/table-cell.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tectu';
  headers = ['1', '2', '3'];

  data: TableCell[][] = [
    [
      {type: 'text', value: 'John'}, 
      { type: 'checkbox', value: true },
      {type: 'text', value: 'New York'}
    ],
    [
      { type: 'text', value: 'John Doe' },
      { type: 'checkbox', value: true },
      { type: 'image', value: 'https://img.freepik.com/free-photo/fried-chicken-breast-cheese-tomato-french-fries-ketchup-green-salad-side-view-jpg_141793-1782.jpg?w=1380&t=st=1684853792~exp=1684854392~hmac=1620154fad1abb48b64e7f6d0d2ffe68c4b94d871180fce39f7e26caa293dc3e' },
    ],
    [
      {type: 'text', value: 'John'}, 
      {type: 'text', value: '25'},
      {type: 'text', value: 'New York'}
    ],
    [
      { type: 'text', value: 'Jane Smith' },
      { type: 'checkbox', value: false },
      { type: 'image', value: 'https://img.freepik.com/free-photo/high-angle-shot-banana-isolated-white-surface_181624-29513.jpg?w=1380&t=st=1684853855~exp=1684854455~hmac=6bc443268083f449d3051b761d87c56ee61c0e20679457016cf9c2bac177bdea' },
    ],
  ];
}
