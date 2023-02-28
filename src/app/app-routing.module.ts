import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialComponent } from './docs/angular-material/angular-material.component';
import { AngularComponent } from './docs/angular/angular.component';
import { RxjsComponent } from './docs/rxjs/rxjs.component';
import { TypescriptComponent } from './docs/typescript/typescript.component';

const routes: Routes = [
  {
    path: 'angular', component: AngularComponent
  },
  {
    path: 'typescript', component: TypescriptComponent
  },
  {
    path : 'angular-material', component: AngularMaterialComponent
  },
  {
    path: 'rxjs', component: RxjsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
