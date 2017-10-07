import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipDemo} from './tooltipdemo';
import { TooltipDemoRoutingModule } from './tooltipdemo-routing.module';
import { TooltipModule, InputTextModule, TabViewModule, CodeHighlighterModule } from 'primeng/primeng';


@NgModule({
	imports: [
		CommonModule,
		TooltipDemoRoutingModule,
        TooltipModule,
        InputTextModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		TooltipDemo
	]
})
export class TooltipDemoModule {}
