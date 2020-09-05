import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginRedirectGuard } from './core/guards/login-redirect-guard.service';
import { AuthGuardsService } from './core/guards/auth-guard.service';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule), canActivate: [LoginRedirectGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardsService], canActivateChild: [AuthGuardsService], children: [
      {path: 'userList', loadChildren: () => import('./user-list/user-list.module').then(m => m.UserListModule)},
      {path: 'createUser', loadChildren: () => import('./create-user/create-user.module').then(m => m.CreateUserModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
