import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  nombres = [
    'primer nombre', 'segundo nombre', 'tercer nombre', 'cuarto nombre', 'quinto nombre'
  ];

  constructor() { }

  ngOnInit() {
  }

}
