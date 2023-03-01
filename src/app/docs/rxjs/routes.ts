import { Route } from "@angular/router";
import { FromComponent } from "./operators/from/from.component";
import { FromeventComponent } from "./operators/fromevent/fromevent.component";
import { RxjsComponent } from "./rxjs.component";


export const RXJS_ROUTES: Route[] = [
    {
        path: '', component: RxjsComponent
    },
    {
        path: 'fromevent', component: FromeventComponent
    },
    {
        path: 'from', component: FromComponent
    }
]