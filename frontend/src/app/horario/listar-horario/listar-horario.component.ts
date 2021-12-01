import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-horario',
  templateUrl: './listar-horario.component.html',
  styleUrls: ['./listar-horario.component.css']
})
export class ListarHorarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public horarios = [
    {
      "data": "Qua 01/12/2021",
      "hora": "08:00h"
    },
    {
      "data": "Qua 01/12/2021",
      "hora": "08:00h"
    },
    {
      "data": "Qua 01/12/2021",
      "hora": "09:00h"
    },
    {
      "data": "Qua 01/12/2021",
      "hora": "10:00h"
    },
    {
      "data": "Qui 02/12/2021",
      "hora": "08:00h"
    },
    {
      "data": "Qui 02/12/2021",
      "hora": "08:00h"
    },
    {
      "data": "Qui 02/12/2021",
      "hora": "08:00h"
    },
    {
      "data": "Qui 02/12/2021",
      "hora": "08:00h"
    },
    {
      "data": "Qui 02/12/2021",
      "hora": "08:00h"
    },
    {
      "data": "Qui 02/12/2021",
      "hora": "08:00h"
    },
    {
      "data": "Qui 02/12/2021",
      "hora": "08:00h"
    },
    {
      "data": "Qui 02/12/2021",
      "hora": "08:00h"
    }
    
  ]
}
