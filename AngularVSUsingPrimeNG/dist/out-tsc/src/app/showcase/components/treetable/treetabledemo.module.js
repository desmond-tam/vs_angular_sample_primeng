var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeTableDemo } from './treetabledemo';
import { TreeTableDemoRoutingModule } from './treetabledemo-routing.module';
import { TreeTableModule, GrowlModule, TabViewModule, ContextMenuModule, CodeHighlighterModule } from 'primeng/primeng';
let TreeTableDemoModule = class TreeTableDemoModule {
};
TreeTableDemoModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            TreeTableDemoRoutingModule,
            TreeTableModule,
            GrowlModule,
            TabViewModule,
            ContextMenuModule,
            CodeHighlighterModule
        ],
        declarations: [
            TreeTableDemo
        ]
    })
], TreeTableDemoModule);
export { TreeTableDemoModule };
//# sourceMappingURL=treetabledemo.module.js.map