import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { InvestPagePage } from '../invest-page/invest-page.page';
import { ContactPage } from '../contact/contact.page';
import { PerformancePagePage } from '../performance-page/performance-page.page';
import { AccountPagePage } from '../account-page/account-page.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'InvestPage',
        outlet: 'InvestPage',
        component: InvestPagePage
      },
      {
        path: 'PerformancePage',
        outlet: 'PerformancePage',
        component: PerformancePagePage
      },
      {
        path: 'AccountPage',
        outlet: 'AccountPage',
        component: AccountPagePage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
