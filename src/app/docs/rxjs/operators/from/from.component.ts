import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {

  data: any;
  
  constructor(){}

  ngOnInit(): void {
    const obj = from(['a', 'b', 'c', 'd']);

    obj.subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }
}
