import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  CAM = [
    'Reglamento de Arbitraje del CAM',
    'Reglamento de Arbitrtaje del CAM del 1 de julio de 1997 al 30 de junio de 2009'
  ];

  CANACO = [
    'Reglamento de Arbitrjae de la CANACO',
    'Reglamento de Arbitraje de la CANACO-ABC'
  ];

  CCI = [
    'Reglamento de Arbitraje de la CCI 2017',
    'Reglamento de Arbitraje de la CCI 2012',
    'Reglamento de Arbitraje de la CCI 1998'
  ];

  CNUDMI = [
    'Reglamento de Arbitraje de la CNUDMI 1976',
    'Reglamento de Arbitraje de la CNUDMI revisado en 2010',
    'Reglamento de Arbitraje de la CNUDMI con el nuevo artículo 1, párrafo 4, aprobado en 2013'
  ];

  ICDR = [
    'Reglamento de Arbitraje Internacional de la AAA'
  ];

  CIADI = [
    'Reglas de CIADI'
  ];

  LINEAMIENTOS = [
    'IBA Rules of Ethics for International Arbitrators',
    'IBA International Code of Ethics',
    'IBA Guidelines on Conflicts of Interes in International Arbitration',
    'IBA Guidelines on Party Representation in International Arbitration',
    'IBA Guidelines for Drafting International Arbitration Clauses'
  ];

  constructor() { }

  ngOnInit() {
  }

}
