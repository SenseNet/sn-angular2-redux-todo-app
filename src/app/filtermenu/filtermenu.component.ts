import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtermenu',
  template: `
    <md-toolbar-row>
      <button md-button *ngFor="let b of filters"
        [ngClass]="getSelectedClass(b)"
        (click)="selectFilter(b)">
        {{ b.title }}
        </button>
    </md-toolbar-row>
  `,
  styles: [`
    .md-accent .md-ripple-background {
      opacity: 1 !important;
    }
  `]
})
export class FiltermenuComponent implements OnInit {
  @Output() changeFilter: EventEmitter<any> = new EventEmitter();
  filters = [{ title: 'All' }, { title: 'Active' }, { title: 'Completed' }];
  selectedButton = this.filters[0];
  constructor() { }

  ngOnInit() {
  }

  selectFilter(button) {
    this.changeFilter.emit(button.title);
    this.selectedButton = button;
  }
  getSelectedColor(button) {
    if (button.title === this.selectedButton.title) {
      return `accent`;
    } else {
      return `primary`;
    }
  }
  getSelectedClass(button) {
    if (button.title === this.selectedButton.title) {
      return `md-accent`;
    } else {
      return `md-primary`;
    }
  }
}
