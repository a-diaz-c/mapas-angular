export class Marcador{

    public lat: number;
    public lng: number;

    public titulo: String = 'Sin titulo';
    public desc: String = 'Sin descripción';

    constructor(lat: number, lng: number){
        this.lat = lat;
        this.lng = lng;    
    }
}