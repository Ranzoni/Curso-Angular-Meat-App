import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { OrderComponent } from "./order.component";

export class LevaOrderGuard implements CanDeactivate<OrderComponent> {

    canDeactivate(orderComponent: OrderComponent,
        activatedRoute: ActivatedRouteSnapshot,
        routerState: RouterStateSnapshot): boolean {
        if (!orderComponent.isOrderCompleted()) {
            return window.confirm('Deseja desistir da compra?');
        } else {
            return true;
        }
    }

}