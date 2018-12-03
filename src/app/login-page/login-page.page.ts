import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { RegisterPagePage } from '../register-page/register-page.page';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  //constructor() { }

  ngOnInit() {
  }

  username:string;
  password:string;

  constructor(private navCtrl: NavController) { //}, public navParams: NavParams) {
  }

  login(){
    console.log("Username: " + this.username);
    console.log("Password: " + this.password);
    this.navCtrl.navigateForward('tabs');
  }

  register(){
    this.navCtrl.navigateForward('RegisterPage');
  }

}
