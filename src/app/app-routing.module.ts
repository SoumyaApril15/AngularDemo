import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { User1Component } from './pages/user1/user1.component';
import { User2Component } from './pages/user2/user2.component';

const routes: Routes = [
//  {path: '', pathMatch: 'full', redirectTo:'login' },
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user1', component: User1Component},
  {path: 'user2', component: User2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
