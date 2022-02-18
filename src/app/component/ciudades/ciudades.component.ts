import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.scss']
})
export class CiudadesComponent implements OnInit {

  public ciudades: Ciudad[];
  


  constructor() { 

    this.ciudades = [
      {nombre:"Madrid", pais:"España", codigo: 34},
      {nombre:"Paris", pais:"Francia", codigo: 33},
      {nombre:"Caracas", pais:"Venezuela", codigo: 58},
      {nombre:"Roma", pais:"Italia", codigo: 39},
      {nombre:"Oporto", pais:"Portugal", codigo: 39}
    ]
  }

  ngOnInit(): void {    
  }

}
