import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-directory-popover',
  templateUrl: './directory-popover.component.html',
  styleUrls: ['./directory-popover.component.scss']
})
export class DirectoryPopoverComponent implements OnInit {

  @Input('selected') selected: any;

  constructor() { }

  ngOnInit() {
    console.log(this.selected);
  }

}
