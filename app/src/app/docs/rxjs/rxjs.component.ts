import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FromComponent } from './operators/from/from.component';
import { FromeventComponent } from './operators/fromevent/fromevent.component';
import { OperatorsComponent } from './operators/operators.component';
import { SubjectsComponent } from './subjects/subjects.component';
@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [FromeventComponent, FromComponent, RouterModule, OperatorsComponent, SubjectsComponent],
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent {

}
