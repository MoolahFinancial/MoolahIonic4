import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.page.html',
  styleUrls: ['./account-page.page.scss'],
})
export class AccountPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  logout() {

  }

}
