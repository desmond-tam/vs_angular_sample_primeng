var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeHighlighterDemo } from './codehighlighterdemo';
import { CodeHighlighterDemoRoutingModule } from './codehighlighterdemo-routing.module';
import { CodeHighlighterModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
let CodeHighlighterDemoModule = class CodeHighlighterDemoModule {
};
CodeHighlighterDemoModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            CodeHighlighterDemoRoutingModule,
            TabViewModule,
            CodeHighlighterModule
        ],
        declarations: [
            CodeHighlighterDemo
        ]
    })
], CodeHighlighterDemoModule);
export { CodeHighlighterDemoModule };
//# sourceMappingURL=codehighlighterdemo.module.js.map