import { OnlyLoggedInUserGuardService } from './Guards/only-logged-in-user-guard.service';
import { WelcomeComponent } from './Components/Welcome/Welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { ToastModule } from 'primeng/toast';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRoutes } from './app.routes';
import { LoginComponent } from './Components/Login/Login.component';
import { UserService } from './services/user-service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    UserService,
    OnlyLoggedInUserGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
