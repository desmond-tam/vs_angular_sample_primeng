var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataScrollerDemo } from './datascrollerdemo';
import { DataScrollerSubMenu } from './datascrollersubmenu';
import { DataScrollerInfiniteDemo } from './datascrollerinfinitedemo';
import { DataScrollerInlineDemo } from './datascrollerinlinedemo';
import { DataScrollerLoaderDemo } from './datascrollerloaderdemo';
import { DatascrollerDemoRoutingModule } from './datascrollerdemo-routing.module';
import { DataScrollerModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';
let DataScrollerDemoModule = class DataScrollerDemoModule {
};
DataScrollerDemoModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            DatascrollerDemoRoutingModule,
            DataScrollerModule,
            DialogModule,
            ButtonModule,
            GrowlModule,
            TabViewModule,
            CodeHighlighterModule
        ],
        declarations: [
            DataScrollerDemo,
            DataScrollerInfiniteDemo,
            DataScrollerInlineDemo,
            DataScrollerLoaderDemo,
            DataScrollerSubMenu
        ]
    })
], DataScrollerDemoModule);
export { DataScrollerDemoModule };
//# sourceMappingURL=datascrollerdemo.module.js.map