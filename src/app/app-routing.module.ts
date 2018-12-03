import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'LoginPage', pathMatch: 'full' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'HomePage', loadChildren: './home-page/home-page.module#HomePagePageModule' },
  { path: 'InvestPage', loadChildren: './invest-page/invest-page.module#InvestPagePageModule' },
  { path: 'PerformancePage', loadChildren: './performance-page/performance-page.module#PerformancePagePageModule' },
  { path: 'AccountPage', loadChildren: './account-page/account-page.module#AccountPagePageModule' },
  { path: 'RegisterPage', loadChildren: './register-page/register-page.module#RegisterPagePageModule' },
  { path: 'LoginPage', loadChildren: './login-page/login-page.module#LoginPagePageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
