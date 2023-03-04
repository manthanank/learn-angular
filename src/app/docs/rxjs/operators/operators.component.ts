import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FromComponent } from './from/from.component';

@Component({
  selector: 'app-operators',
  standalone: true,
  imports: [CommonModule, RouterModule, FromComponent],
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent {

}
