import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabMenuDemo} from './tabmenudemo';
import { TabMenuDemoRoutingModule } from './tabmenudemo-routing.module';
import { TabMenuModule, TabViewModule, CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		TabMenuDemoRoutingModule,
        TabMenuModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		TabMenuDemo
	]
})
export class TabMenuDemoModule {}
