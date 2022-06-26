import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

const STEP = 0.25;
const PRECISION = 1000.0
const getStepRemainder = (num: number) => {
  num *= PRECISION
  const step = STEP * PRECISION
  const remainder = num % step
  return remainder / PRECISION
}

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
    const remainder = getStepRemainder(this.value)
    const newValue = this.value + STEP - remainder
    this.valueChange.emit(newValue);
  }

  onRemove() {
    const remainder = getStepRemainder(this.value)
    const newValue = this.value - (remainder || STEP)
    this.valueChange.emit(newValue);
  }

  onChange(event: any) {
    const newValue = parseFloat(event.target.value) || 0;
    this.valueChange.emit(newValue);
  }
}
