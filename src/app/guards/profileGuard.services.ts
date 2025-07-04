import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class profileGuardService implements CanActivate {
token: string | null = '';
constructor(private router: Router){

}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.token == null) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
