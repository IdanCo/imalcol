import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

const STEP = 0.5;

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() value!: number;
  @Input() locked!: boolean;
  @Output() valueChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    const newValue = this.value + STEP;
    this.valueChange.emit(newValue);
  }

  onRemove() {
    const newValue = this.value - STEP;
    this.valueChange.emit(newValue);
  }
}
