import { Routes, RouterModule, CanActivate } from '@angular/router';
import { WelcomeComponent } from './Components/Welcome/Welcome.component';
import { LoginComponent } from './Components/Login/Login.component';
export const appRoutes: Routes = [
    {
        path: '', component: LoginComponent
    },
    {
        path: 'home', component: WelcomeComponent
    }];

