import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postures',
  templateUrl: './postures.component.html',
  styleUrls: ['./postures.component.scss']
})
export class PosturesComponent implements OnInit {

  postures = [
    'Postura del Instituto Mexicano del Arbitraje sobre la Promulgación del Convenio CIADI por México',
    'Postura respecto a la Ilegalidad de las Medidas Judiciales para Suspender el Procedimiento Arbitral',
    'Postura sobre adhesión México CIADI',
    'Postura sobre aplicación temporal del reglamento arbitral',
    'Postura sobre contradicción recursos en procedimientos de nulidad y ejecución laudo (Contr. 40-2007)',
    'Postura sobre improcedencia de amparo contra árbitro',
    'Postura sobre procedimientos arbitrales y judiciales vinculados',
    'Postura sobre reconvención de ejecución en juicio de nulidad'
  ];

  constructor() { }

  ngOnInit() {
  }

}
