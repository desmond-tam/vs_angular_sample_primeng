var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationChartDemo } from './organizationchartdemo';
import { OrganizationChartDemoRoutingModule } from './organizationchartdemo-routing.module';
import { OrganizationChartModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';
let OrganizationChartDemoModule = class OrganizationChartDemoModule {
};
OrganizationChartDemoModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            OrganizationChartDemoRoutingModule,
            OrganizationChartModule,
            GrowlModule,
            PanelModule,
            TabViewModule,
            CodeHighlighterModule
        ],
        declarations: [
            OrganizationChartDemo
        ]
    })
], OrganizationChartDemoModule);
export { OrganizationChartDemoModule };
//# sourceMappingURL=organizationchartdemo.module.js.map