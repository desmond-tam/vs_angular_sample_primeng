import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganizationChartDemo} from './organizationchartdemo';
import {OrganizationChartDemoRoutingModule} from './organizationchartdemo-routing.module';
import {OrganizationChartModule} from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
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
export class OrganizationChartDemoModule {}
