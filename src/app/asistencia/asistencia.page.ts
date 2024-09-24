import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  asistencias = [ 
    {dia: "Lunes", fecha: "12/10/24", estado: "Presente"},
    {dia: "Martes", fecha: "13/10/24", estado: "Ausente"},
    {dia: "Miércoles", fecha: "14/10/24", estado: "Presente"},
    {dia: "Jueves", fecha: "15/10/24", estado: "Presente"},
    {dia: "Viernes", fecha: "16/10/24", estado: "Ausente"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
