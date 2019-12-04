import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GLOBAL } from '../../../global';

//  modelos
import { Archive } from '../../models/archive';

@Component({
  selector: 'app-postures',
  templateUrl: './postures.component.html',
  styleUrls: ['./postures.component.scss']
})

export class PosturesComponent implements OnInit {

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
