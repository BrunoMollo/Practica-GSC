import { Component, OnInit } from '@angular/core';
import { map, Subject } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  subject: Subject<string>= new Subject();
  output: string[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.subject
      .pipe(map( (k)=>k.toUpperCase() ))
      .subscribe(key => {
        //this.output.push(key);   <- al no reasignar el arreglo, no se vuelve a actualizar la ui 
        this.output=[...this.output, key]
      })
  }

  keypress(e: any): void {
    this.subject.next(e.key);
  }
  
}

