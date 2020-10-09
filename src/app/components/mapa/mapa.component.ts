import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat;
  lng ;

  constructor(private locationService: LocationService) { 
    //const nuevoMarcador = new Marcador(16.905134999999998,-99.8207408);

    //this.marcadores.push(nuevoMarcador);

    if(localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
  }

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    this.locationService.getPosition().then(pos => {
        this.lat = pos.lat;
        this.lng = pos.lng;
    });
  }

  agregarMarcador(evento){
    const coords: { lat: number, lng: number} = evento.coords;

    const nuevoMarcador = new Marcador(coords.lat, coords.lng);

    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
  }

  borrarMarcador(i: number){
    this.marcadores.splice(i, 1);
    this.guardarStorage();
  }


  guardarStorage(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  
}
