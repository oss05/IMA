import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//  modelos
import { Archive } from '../../models/archive';
import { GLOBAL } from '../../../global';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent implements OnInit {

  public archives: Array<Archive>;
  public url: string;

  constructor(
    private route: ActivatedRoute
  ) {
    this.archives = this.route.snapshot.data.archives;
    this.url = GLOBAL.url;
  }

  ngOnInit() {

    console.log(this.archives);
  }

}
