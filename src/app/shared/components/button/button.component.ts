import { Component, Input, OnInit } from '@angular/core';
import { ITypeButton } from './button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() title = '';
  @Input() type = '';

  constructor() { }

  ngOnInit() {
  }
}
