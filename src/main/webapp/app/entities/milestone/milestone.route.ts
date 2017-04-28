import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { MilestoneComponent } from './milestone.component';
import { MilestoneDetailComponent } from './milestone-detail.component';
import { MilestonePopupComponent } from './milestone-dialog.component';
import { MilestoneDeletePopupComponent } from './milestone-delete-dialog.component';

import { Principal } from '../../shared';

export const milestoneRoute: Routes = [
  {
    path: 'milestone',
    component: MilestoneComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'opengiveApp.milestone.home.title'
    },
    canActivate: [UserRouteAccessService]
  }, {
    path: 'milestone/:id',
    component: MilestoneDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'opengiveApp.milestone.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const milestonePopupRoute: Routes = [
  {
    path: 'milestone-new',
    component: MilestonePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'opengiveApp.milestone.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  },
  {
    path: 'milestone/:id/edit',
    component: MilestonePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'opengiveApp.milestone.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  },
  {
    path: 'milestone/:id/delete',
    component: MilestoneDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'opengiveApp.milestone.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];