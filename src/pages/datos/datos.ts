import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosPage } from '../favoritos/favoritos';
import { HomePage } from '../home/home';

/**
 * Generated class for the DatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datos',
  templateUrl: 'datos.html',
})
export class DatosPage {
casa; 
Fav=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.casa= (this.navParams.get('casa'));
  this.Fav= (this.navParams.get('favoritos'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosPage');
  }
  clickShow(casa) {
    this.Fav.push(this.casa);
    this.navCtrl.pop();
  }
}
