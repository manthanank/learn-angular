import { Route } from "@angular/router";
import { FromComponent } from "./operators/from/from.component";
import { FromeventComponent } from "./operators/fromevent/fromevent.component";
import { OperatorsComponent } from "./operators/operators.component";
import { RxjsComponent } from "./rxjs.component";
import { SubjectsComponent } from "./subjects/subjects.component";


export const RXJS_ROUTES: Route[] = [
    {
        path: '', component: RxjsComponent,
    },
    {
        path: 'operators', loadChildren: () => import('./operators/operators-routes').then(m => m.OPERATOTS_ROUTES),
    },
    {
        path: 'subjects', loadChildren: () => import('./subjects/subjects-routes').then(m => m.SUBJECTS_ROUTES),
    }
]