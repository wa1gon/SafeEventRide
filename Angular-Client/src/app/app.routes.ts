import { Routes, RouterModule, CanActivate } from '@angular/router';
import { WelcomeComponent } from './Components/Welcome/Welcome.component';
import { LoginComponent } from './Components/Login/Login.component';
import { OnlyLoggedInUserGuardService } from './Guards/only-logged-in-user-guard.service';
export const appRoutes: Routes = [
    {
        path: '', component: LoginComponent
    },
    {
        path: 'home', component: WelcomeComponent, canActivate: [OnlyLoggedInUserGuardService]
    }];

