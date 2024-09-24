import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  asignaturas = [
    {sigla: "PGY4121", asignatura: "Arquitectura", seccion:"001D"},
    {sigla: "PGY4122", asignatura: "Programación", seccion:"002D"},
    {sigla: "PGY4123", asignatura: "Calidad de software", seccion:"003D"},
    {sigla: "PGY4124", asignatura: "Arquitectura", seccion:"004D"},
    {sigla: "PGY4125", asignatura: "Calidad de software", seccion:"005D"},
    {sigla: "PGY4126", asignatura: "Programación", seccion:"006D"},
    {sigla: "PGY4127", asignatura: "Arquitectura", seccion:"007D"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
