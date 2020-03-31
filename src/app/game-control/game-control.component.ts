import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<number>();
  interval;
  count = 0;
  startButtonEnabled = true;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.startButtonEnabled = false;
    this.interval = setInterval(() => {
      this.gameStarted.emit(++this.count);
    }, 1000);
  }

  onStopGame() {
    this.startButtonEnabled = true;
    clearInterval(this.interval);
  }


}
