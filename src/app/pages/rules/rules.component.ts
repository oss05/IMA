import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//  modelos
import { Archive } from '../../models/archive';
import { GLOBAL } from '../../../global';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  public archives: Array<Archive>;
  public url: string;

  constructor(
    private route: ActivatedRoute
  ) {
    this.archives = this.route.snapshot.data.archives;
    this.url = GLOBAL.url;
  }

  ngOnInit() {

    console.log(this.archives)
  }

}
