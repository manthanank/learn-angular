import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { PipesComponent } from './pipes/pipes.component';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsComponent, ComponentsComponent, DirectivesComponent, DecoratorsComponent, LifeCycleHooksComponent, PipesComponent],
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent {

}
