var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeferDemo } from './deferdemo';
import { DeferDemoRoutingModule } from './deferdemo-routing.module';
import { DeferModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';
let DeferDemoModule = class DeferDemoModule {
};
DeferDemoModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            DeferDemoRoutingModule,
            DeferModule,
            GrowlModule,
            TabViewModule,
            DataTableModule,
            CodeHighlighterModule
        ],
        declarations: [
            DeferDemo
        ]
    })
], DeferDemoModule);
export { DeferDemoModule };
//# sourceMappingURL=deferdemo.module.js.map