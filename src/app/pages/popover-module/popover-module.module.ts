import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoryPopoverComponent } from '../../components/directory-popover/directory-popover.component';

@NgModule({
  declarations: [DirectoryPopoverComponent],
  imports: [
    CommonModule
  ],
  exports: [DirectoryPopoverComponent]
})
export class PopoverModuleModule { }
