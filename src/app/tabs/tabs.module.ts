import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactPageModule } from '../contact/contact.module';
import { InvestPagePageModule } from '../invest-page/invest-page.module';
import { HomePageModule } from '../home/home.module';
import { PerformancePagePageModule } from '../performance-page/performance-page.module';
import { AccountPagePageModule } from '../account-page/account-page.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    InvestPagePageModule,
    ContactPageModule,
    PerformancePagePageModule,
    AccountPagePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
