import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialComponent } from './docs/angular-material/angular-material.component';
import { AngularComponent } from './docs/angular/angular.component';
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
    path: 'rxjs', loadChildren: () => import('./docs/rxjs/routes').then(m => m.RXJS_ROUTES)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
