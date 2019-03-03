import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';


@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService,private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.user$.pipe(switchMap(user => this.userService.get(user.uid))
    .map(appUser => appUser.isAdmin));
 }
}
