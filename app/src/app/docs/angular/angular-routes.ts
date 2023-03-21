import { Route } from "@angular/router";
import { AngularComponent } from "./angular.component";


export const ANGULAR_ROUTES: Route[] = [
    {
        path: '', component: AngularComponent,
    },
    {
        path: 'components', loadChildren: () => import('./components/components-routes').then(m => m.COMPONENTS_ROUTES),
    },
    {
        path: 'decorators', loadChildren: () => import('./decorators/decorators-routes').then(m => m.DECORATORS_ROUTES),
    },
    {
        path: 'directives', loadChildren: () => import('./directives/directives-routes').then(m => m.DIRECTIVES_ROUTES),
    },
    {
        path: 'forms', loadChildren: () => import('./forms/forms-routes').then(m => m.FORMS_ROUTES),
    },
    {
        path: 'life-cycle-hooks', loadChildren: () => import('./life-cycle-hooks/life-cycle-hooks-routes').then(m => m.LIFECYCLEHOOKS_ROUTES),
    },
    {
        path: 'pipes', loadChildren: () => import('./pipes/pipes-routes').then(m => m.PIPES_ROUTES),
    },
]