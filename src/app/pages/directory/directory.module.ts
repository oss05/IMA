import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverModule } from 'ngx-bootstrap';
import { PopoverModuleModule } from '../popover-module/popover-module.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PopoverModule.forRoot(),
    PopoverModuleModule
  ]
})
export class DirectoryModule { }
