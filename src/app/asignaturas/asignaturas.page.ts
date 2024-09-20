import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  asignaturas = [
    {seccion: "PGY4121", asignatura: "Arquitectura"},
    {seccion: "PGY4122", asignatura: "Programación"},
    {seccion: "PGY4123", asignatura: "Calidad de software"},
    {seccion: "PGY4124", asignatura: "Arquitectura"},
    {seccion: "PGY4125", asignatura: "Calidad de software"},
    {seccion: "PGY4126", asignatura: "Programación"},
    {seccion: "PGY4127", asignatura: "Arquitectura"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
