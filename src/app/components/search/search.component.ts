import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GLOBAL } from '../../../global';

//  modelos
import { Archive } from '../../models/archive';

// servicios
import { ArchiveService } from '../../services/archive.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public limit: number;
  public archives: Array<Archive>;
  public url: string;
  public search: string;
  constructor(
    private archiveService: ArchiveService,
    private route: ActivatedRoute
  ) {
    // this.archives = this.route.snapshot.data.archives;
    this.url = GLOBAL.url;
    this.limit = 9;
    this.archives = [];
    this.search = '';
  }

  ngOnInit() {

    this.route.params.subscribe(routeParams => {
      this.archiveService.searchPosts(routeParams.search).subscribe(
        response => {
          if (response) {
            this.archives = response;
            this.search = routeParams.search;
            this.limit = 9;
          }
        },

        err => {
          console.log('Ocurrió un error al buscar las notas' + err);
        }
      );
    });

    console.log(this.search);
  }

}
