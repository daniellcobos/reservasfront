import { Component, OnInit } from '@angular/core';
import BarService from './Bar.service';
import Bar from './bar.model';
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  bares: Bar[] = [];
  constructor(private bservice: BarService) { }

  ngOnInit() {
    this.bservice.getBares().subscribe(
      (data: any) => {
       this.bares = data;
      }
    );
  }
}
