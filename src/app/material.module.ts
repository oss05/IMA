import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule
    ],
    exports: [
        MatButtonModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule
    ]
})

export class MaterialModule { }
