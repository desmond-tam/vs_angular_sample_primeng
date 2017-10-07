var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldsetDemo } from './fieldsetdemo';
import { FieldsetDemoRoutingModule } from './fieldsetdemo-routing.module';
import { FieldsetModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';
let FieldsetDemoModule = class FieldsetDemoModule {
};
FieldsetDemoModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FieldsetDemoRoutingModule,
            FieldsetModule,
            TabViewModule,
            CodeHighlighterModule
        ],
        declarations: [
            FieldsetDemo
        ]
    })
], FieldsetDemoModule);
export { FieldsetDemoModule };
//# sourceMappingURL=fieldsetdemo.module.js.map