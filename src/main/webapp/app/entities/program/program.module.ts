import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OpengiveSharedModule } from '../../shared';
import { OpengiveAdminModule } from '../../admin/admin.module';
import {
    ProgramService,
    ProgramPopupService,
    ProgramComponent,
    ProgramDetailComponent,
    ProgramDialogComponent,
    ProgramPopupComponent,
    ProgramDeletePopupComponent,
    ProgramDeleteDialogComponent,
    programRoute,
    programPopupRoute,
} from './';

const ENTITY_STATES = [
    ...programRoute,
    ...programPopupRoute,
];

@NgModule({
    imports: [
        OpengiveSharedModule,
        OpengiveAdminModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        ProgramComponent,
        ProgramDetailComponent,
        ProgramDialogComponent,
        ProgramDeleteDialogComponent,
        ProgramPopupComponent,
        ProgramDeletePopupComponent,
    ],
    entryComponents: [
        ProgramComponent,
        ProgramDialogComponent,
        ProgramPopupComponent,
        ProgramDeleteDialogComponent,
        ProgramDeletePopupComponent,
    ],
    providers: [
        ProgramService,
        ProgramPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OpengiveProgramModule {}
