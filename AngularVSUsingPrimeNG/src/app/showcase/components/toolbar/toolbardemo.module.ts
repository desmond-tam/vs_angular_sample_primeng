import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarDemo} from './toolbardemo';
import { ToolbarDemoRoutingModule } from './toolbardemo-routing.module';
import { ToolbarModule, ButtonModule, SplitButtonModule, TabViewModule, CodeHighlighterModule } from 'primeng/primeng';


@NgModule({
	imports: [
		CommonModule,
		ToolbarDemoRoutingModule,
        ToolbarModule,
        ButtonModule,
        SplitButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ToolbarDemo
	]
})
export class ToolbarDemoModule {}
