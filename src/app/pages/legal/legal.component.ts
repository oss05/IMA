import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent implements OnInit {

  legislacion = [
    'Legislación mexicana de arbitraje (Libro V, Título IV del Código de Comercio de México).',
    'Código Civil Federal.'
  ];

  convenios = [
    'Convención sobre el Reconocimiento y la Ejecución de las Sentencias Arbitrales Extranjeras Nueva York, 10 junio de 1958',
    'Convención Interamericana sobre Arbitraje Comercial Internacional Panamá, 30 de enero de 1975. (Convención de Panama)',
    'Convenio CIADI'
  ];

  jurisprudencia = [
    'Incidente de reconocimiento o ejecución de laudo arbitral comercial.',
    // tslint:disable-next-line: max-line-length
    'Acceso a los mecanismos alternativos de solución de controversias, como derecho humano. Goza de la misma dignidad que el acceso a la jurisdicción del Estado.',
    'Amparo directo 33 2014 - acción colectiva cláusula arbitral.',
    'Amparo directo contra sentencia de nulidad.',
    'Amparo directo Vs sentencia de nulidad.'
  ];

  constructor() { }

  ngOnInit() {
  }

}
