import { Component, OnInit } from '@angular/core';
import { of, lastValueFrom, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  obs;
  firstResult: number;
  promiseFirst: Promise<number>;

  lastResult: number;
  promiseLast: Promise<number>;

  constructor() { 
    this.obs = of(35,43,57);
  }

  ngOnInit(): void {
    this.promiseFirst=firstValueFrom(this.obs)
    this.promiseLast=lastValueFrom(this.obs)
  }

  listen(): void {
    this.promiseLast.then((val) => this.lastResult = val );
    this.promiseFirst.then((val) => this.firstResult = val)
  }

}
