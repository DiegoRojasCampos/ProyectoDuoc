import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  asistencias = [ 
    {dia: "Arquitectura", fecha: "12/10/24", estado: "Presente"},
    {dia: "Aplicaciones", fecha: "13/10/24", estado: "Ausente"},
    {dia: "Estadística", fecha: "14/10/24", estado: "Presente"},
    {dia: "Ética", fecha: "15/10/24", estado: "Presente"},
    {dia: "Inglés", fecha: "16/10/24", estado: "Ausente"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
