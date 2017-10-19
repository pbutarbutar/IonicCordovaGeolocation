import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	map: any;

	constructor(public navCtrl: NavController, public geolocation: Geolocation) {

	}

	ionViewDidLoad(){
		this.initializeMap();
	}

	initializeMap() {

		 this.geolocation.getCurrentPosition().then((position) => {

			let options = {
			  center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
			  zoom: 16,
			  mapTypeId: google.maps.MapTypeId.ROADMAP
			}

			this.map = new google.maps.Map(document.getElementById("map_canvas"), options);
		});
	} 
}