import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatosPage } from '../datos/datos';
import { FavoritosPage } from '../favoritos/favoritos';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  datos = DatosPage;
  favoritos = FavoritosPage;
  Fav=[];
  casas=[
    { nombre: "Condominio de lujo ", descripcion: "Tres recámaras, sala comedor, cocina integral, 4.5 baños, dos cajones de estacionamiento techados,  seguridad las 24 horas del día", ubicacion: " Colomos Providencia, Guadalajara ", precio: "$6´150,000", vendedor: " Gilberto Rangel Romo ", terreno: "200m²  ", imagen: "../assets/providencia.jpg ", tel:"33 2360-9056"},
    { nombre: "Departamento bien ubicado", descripcion: "CERCA Gran Plaza, bien ubicado, departamento amueblado, de 1 recámara, sala, colchones nuevos", ubicacion: "Jardines de San Ignacio ", precio: "$7100 X mes ", vendedor: "Juan Jones ", terreno: "245 m² ", imagen: "../assets/depa.jpg ", tel: " 04433 3724-9845" },
    { nombre: "Departamento en Jardines del Country ", descripcion: "Departamento en renta de dos habitaciones, nivel 10, con vista privilegiada. El departamento cuenta con aire acondicionado en área social y en recámara principal, dos baños. Alberca, gimnasio. ", ubicacion: "Jardines Del Country ", precio: "$17000 ", vendedor: "María Esther Lozada ", terreno: "114 m²  ", imagen: "../assets/jardincountry.jpeg ", tel: " 331230318" },
    { nombre: "Oficinas en renta", descripcion: "PROVIDENCIA oficinas en renta amuebladas, todos los servicios", ubicacion: "Providencia", precio: "$4100 ", vendedor: "Priscilla Foncerrada", terreno: "15m² ", imagen: "../assets/oficina.jpg ", tel: "33 3167-4107" },
    { nombre: "Departamento en coto privado ", descripcion: "El mejor fraccionamiento de Zapopan con COTOS PRIVADOS CON ALBERCA,SEGURIDAD PREVENTIVA,ASADORES EN CADA COTO,JUEGOS INFANTILES,PISTAS DE JOGGING,ZONA SKATE,CANCHA DE USOS MÚLTIPLES,PARQUE INFANTIL y MÁS. ", ubicacion: "Ejido Copalita ", precio: "$ 410,000", vendedor: "Isabel Muñoz ", terreno: "90m² ", imagen: "../assets/cotopriv.jpg ", tel: "3321239221" },
    { nombre: "Departamento en Valle de los Molinos ", descripcion: "DEPARTAMENTO segundo nivel Valle de los Molinos Zapopan, 2 recamaras, sala, comedor, baño, patio, cajon estacionamiento ", ubicacion: "Valle De Los Molinos ", precio: "$285,000 ", vendedor: "Felipe De Jesus Gonzalez ", terreno: "40m²  ", imagen: "../assets/valledelosmol.jpg ", tel: "33 3445-7881" },
    { nombre: "Rancho Nuevo ", descripcion: "En coto de solo 7 casas, entrada con portón eléctrico. Dos baños completos y un estacionamiento con bodeguita; cocina integral equipada con estufa y refrigerador. Recámara principal con baño. Conservación impecable ", ubicacion: "Lomas Independencia ", precio: "$ 1,100,000 ", vendedor: " Luis Gabriel Enriquez Lopez ", terreno: "93m²  ", imagen: "../assets/ranchon.jpg ", tel: "33-1081-7963 " },
    { nombre: "Departamento Renta-Venta ", descripcion: "DEPARTAMENTO, junto a Sam's Gonzalez Gallo, Piso 9 preciosa vista al parque,1 cajon estacionamiento,2 recamaras,sala-comedor, cocina integral cbarra, cuarto lavado, closets, protecciones ventanas, cortinas enrollables ", ubicacion: "Quinta Velarde ", precio: "$ 1,160,000 ", vendedor: "Jose Cota ", terreno: "62 m² ", imagen: "../assets/depavr.jpg ", tel: "3336629550" },
    { nombre: "Departamento Arboledas ", descripcion: "DEPARTAMENTO ARBOLEDAS, TRATO DIRECTO, 2 CUARTOS, 1 BAÑO, ÁREA DE LAVADO.UBICADO EN UNA DE LAS MEJORES ZONAS RESIDENCIALES, RECIEN REMODELADO. ", ubicacion: "Arboleas", precio: "$1,240,000 ", vendedor: "Jose Ivan Rodriguez", terreno: "62 m ²", imagen: "../assets/darboledas.jpg ", tel: "3317635116 " },
    { nombre: "Mirador Sol ", descripcion: "MIRADOR Sol, 2 recamaras, un auto,, EDIFICIO CON SOLO 7 DEPARTAMENTOS , EN MUY BUEN ESTADO DE CONSERVACION Y PERFECTAMENTE BIEN SITUADO , CERCA DE LA UNIVA Y MUY CERCA DE AVENIDA PATRIA . 1 ESTAC. EDIF BIEN CONSERVADO 4TO ", ubicacion: "Mirador Del Sol ", precio: "$ 1,390,000 ", vendedor: "Veronica Martinez ", terreno: "70 m ²", imagen: "../assets/miradors.jpg ", tel: " 3314565445 " },
  ]
  constructor(public navCtrl: NavController) {

  }
clickDatos(c)
{
  this.navCtrl.push(this.datos,{casa:c,favoritos:this.Fav});
}
clickAgregar()
{
  this.navCtrl.push(this.favoritos, {favoritos: this.Fav});
}

}
