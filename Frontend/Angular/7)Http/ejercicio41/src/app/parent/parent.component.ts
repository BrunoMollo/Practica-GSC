import { Component, OnInit } from '@angular/core';
import { of, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  obs;
  result: number;
  promise: Promise<number>;

  constructor() { 
    this.obs = of(35);
  }

  ngOnInit(): void {
    this.promise=lastValueFrom(this.obs)
  }

  listen(): void {
    this.promise.then((val) => {
      this.result = val;
    });
  }

}
