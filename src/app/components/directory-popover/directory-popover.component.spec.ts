import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryPopoverComponent } from './directory-popover.component';

describe('DirectoryPopoverComponent', () => {
  let component: DirectoryPopoverComponent;
  let fixture: ComponentFixture<DirectoryPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectoryPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
