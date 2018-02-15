import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { SnapitProject1SharedModule, UserRouteAccessService } from './shared';
import { SnapitProject1AppRoutingModule} from './app-routing.module';
import { SnapitProject1HomeModule } from './home/home.module';
import { SnapitProject1AdminModule } from './admin/admin.module';
import { SnapitProject1AccountModule } from './account/account.module';
import { SnapitProject1EntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        SnapitProject1AppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        SnapitProject1SharedModule,
        SnapitProject1HomeModule,
        SnapitProject1AdminModule,
        SnapitProject1AccountModule,
        SnapitProject1EntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class SnapitProject1AppModule {}
