var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResponsiveDemo } from './responsivedemo';
import { ResponsiveDemoRoutingModule } from './responsivedemo-routing.module';
import { InputTextModule } from 'primeng/primeng';
import { InputTextareaModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { AutoCompleteModule } from 'primeng/primeng';
import { SplitButtonModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { PasswordModule } from 'primeng/primeng';
import { ListboxModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { DataGridModule } from 'primeng/primeng';
import { CarouselModule } from 'primeng/primeng';
import { OrderListModule } from 'primeng/primeng';
import { PickListModule } from 'primeng/primeng';
import { MenuModule } from 'primeng/primeng';
import { PanelMenuModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';
let ResponsiveDemoModule = class ResponsiveDemoModule {
};
ResponsiveDemoModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ResponsiveDemoRoutingModule,
            InputTextModule,
            InputTextareaModule,
            CalendarModule,
            AutoCompleteModule,
            SplitButtonModule,
            PasswordModule,
            DropdownModule,
            ListboxModule,
            RadioButtonModule,
            DialogModule,
            PanelModule,
            DataTableModule,
            DataGridModule,
            CarouselModule,
            OrderListModule,
            PickListModule,
            MenuModule,
            PanelMenuModule,
            TreeModule,
            TabViewModule,
            CodeHighlighterModule
        ],
        declarations: [
            ResponsiveDemo
        ]
    })
], ResponsiveDemoModule);
export { ResponsiveDemoModule };
//# sourceMappingURL=responsivedemo.module.js.map