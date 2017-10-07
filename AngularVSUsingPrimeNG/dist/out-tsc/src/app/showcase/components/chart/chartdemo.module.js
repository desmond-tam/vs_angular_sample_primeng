var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartDemoRoutingModule } from './chartdemo-routing.module';
import { ChartDemo } from './chartdemo';
import { PieChartDemo } from './piechart/piechartdemo';
import { DoughnutChartDemo } from './doughnutchart/doughnutchartdemo';
import { BarChartDemo } from './barchart/barchartdemo';
import { LineChartDemo } from './linechart/linechartdemo';
import { PolarAreaChartDemo } from './polarareachart/polarareachartdemo';
import { RadarChartDemo } from './radarchart/radarchartdemo';
import { ChartModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';
let ChartDemoModule = class ChartDemoModule {
};
ChartDemoModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ChartDemoRoutingModule,
            ChartModule,
            GrowlModule,
            TabViewModule,
            CodeHighlighterModule
        ],
        declarations: [
            ChartDemo,
            PieChartDemo,
            DoughnutChartDemo,
            BarChartDemo,
            LineChartDemo,
            PolarAreaChartDemo,
            RadarChartDemo
        ]
    })
], ChartDemoModule);
export { ChartDemoModule };
//# sourceMappingURL=chartdemo.module.js.map