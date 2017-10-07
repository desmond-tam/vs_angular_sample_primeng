var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableDemo } from './datatabledemo';
import { DataTableCMDemo } from './datatablecmdemo';
import { DataTableColReorderDemo } from './datatablecolreorderdemo';
import { DataTableColResizeDemo } from './datatablecolresizedemo';
import { DataTableColTogglerDemo } from './datatablecoltogglerdemo';
import { DataTableCrudDemo } from './datatablecruddemo';
import { DataTableEditableDemo } from './datatableeditabledemo';
import { DataTableExportDemo } from './datatableexportdemo';
import { DataTableFacetsDemo } from './datatablefacetsdemo';
import { DataTableFilterDemo } from './datatablefilterdemo';
import { DataTableColGroupDemo } from './datatablecolgroupdemo';
import { DataTableRowGroupDemo } from './datatablerowgroupdemo';
import { DataTableLazyDemo } from './datatablelazydemo';
import { DataTablePaginatorDemo } from './datatablepaginatordemo';
import { DataTableResponsiveDemo } from './datatableresponsivedemo';
import { DataTableRowExpansionDemo } from './datatablerowexpansiondemo';
import { DataTableScrollDemo } from './datatablescrolldemo';
import { DataTableSelectionDemo } from './datatableselectiondemo';
import { DataTableSortDemo } from './datatablesortdemo';
import { DataTableTemplatingDemo } from './datatabletemplatingdemo';
import { DataTableSubmenu } from './datatablesubmenu';
import { DatatableDemoRoutingModule } from './datatabledemo-routing.module';
import { DataTableModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { SliderModule } from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';
let DataTableDemoModule = class DataTableDemoModule {
};
DataTableDemoModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            DatatableDemoRoutingModule,
            DataTableModule,
            CalendarModule,
            ButtonModule,
            InputTextModule,
            ContextMenuModule,
            DropdownModule,
            DialogModule,
            MultiSelectModule,
            SliderModule,
            GrowlModule,
            TabViewModule,
            CodeHighlighterModule
        ],
        declarations: [
            DataTableDemo,
            DataTableCMDemo,
            DataTableColReorderDemo,
            DataTableColResizeDemo,
            DataTableColTogglerDemo,
            DataTableCrudDemo,
            DataTableEditableDemo,
            DataTableExportDemo,
            DataTableFacetsDemo,
            DataTableFilterDemo,
            DataTableColGroupDemo,
            DataTableRowGroupDemo,
            DataTableLazyDemo,
            DataTablePaginatorDemo,
            DataTableResponsiveDemo,
            DataTableRowExpansionDemo,
            DataTableScrollDemo,
            DataTableSelectionDemo,
            DataTableSortDemo,
            DataTableTemplatingDemo,
            DataTableSubmenu
        ]
    })
], DataTableDemoModule);
export { DataTableDemoModule };
//# sourceMappingURL=datatabledemo.module.js.map