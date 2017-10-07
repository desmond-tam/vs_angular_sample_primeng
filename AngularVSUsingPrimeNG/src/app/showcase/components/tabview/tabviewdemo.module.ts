import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabViewDemo} from './tabviewdemo';
import { TabViewDemoRoutingModule } from './tabviewdemo-routing.module';
import { GrowlModule, TabViewModule, CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		TabViewDemoRoutingModule,
        GrowlModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		TabViewDemo
	]
})
export class TabViewDemoModule {}
