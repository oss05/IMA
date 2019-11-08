import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {

  videos = [
    {
      title : 'SELECCION DEL ARBITRO',
    },
    {
      title : 'PRESENTACION DEL CASO',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
