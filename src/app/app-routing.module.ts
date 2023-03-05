import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialComponent } from './docs/angular-material/angular-material.component';
import { TypescriptComponent } from './docs/typescript/typescript.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./docs/angular/angular-routes').then(m => m.ANGULAR_ROUTES),
    title: 'Learn Angular'
  },
  {
    path: 'typescript', component: TypescriptComponent,
    title: 'Learn TypeScript'
  },
  {
    path: 'angular-material', component: AngularMaterialComponent,
    title: 'Learn Angular Material'
  },
  {
    path: 'rxjs', loadChildren: () => import('./docs/rxjs/rxjs-routes').then(m => m.RXJS_ROUTES),
    title: 'Learn RxJS'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
