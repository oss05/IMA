import { Component, Renderer } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IMA';

  constructor(
    private router: Router,
    private renderer: Renderer,
  ) {
    this.search = '';
    this.isSearch = false;
  }

  public isSearch: boolean;
  public search: string;

  contactForm: FormGroup;

  onSearch(event) {
    this.renderer.invokeElementMethod(event.target, 'blur');
  }

  onSubmit() {
    this.router.navigate(['search/', this.search]);
    this.search = '';

  }

  
}
