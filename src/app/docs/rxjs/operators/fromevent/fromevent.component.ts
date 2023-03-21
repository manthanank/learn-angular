import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-fromevent',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.scss']
})
export class FromeventComponent implements OnInit, AfterViewInit{

  @ViewChild('add') add:any = ElementRef;

  countVal : any;
  count = 0;
  
  constructor(){}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let count = 0;
    fromEvent(this.add.nativeElement, 'click').subscribe((data) => {
      this.countVal = count++;
      console.log(this.countVal);
    });
  }
}
