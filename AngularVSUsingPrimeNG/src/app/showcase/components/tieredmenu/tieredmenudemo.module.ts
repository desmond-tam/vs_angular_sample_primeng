import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {TieredMenuDemo} from './tieredmenudemo';
import { TieredMenuDemoRoutingModule } from './tieredmenudemo-routing.module';
import { TieredMenuModule, ButtonModule, TabViewModule, CodeHighlighterModule } from 'primeng/primeng';


@NgModule({
	imports: [
		CommonModule,
		TieredMenuDemoRoutingModule,
        TieredMenuModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		TieredMenuDemo
	]
})
export class TieredMenuDemoModule {}
