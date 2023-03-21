import { Route } from "@angular/router";
import { FromComponent } from "./from/from.component";
import { FromeventComponent } from "./fromevent/fromevent.component";
import { OperatorsComponent } from "./operators.component";


export const OPERATOTS_ROUTES: Route[] = [
    {
        path: '', component: OperatorsComponent,
    },
    {
        path: 'from', component: FromComponent,
    },
    {
        path: 'fromevent', component: FromeventComponent,
    }
]