import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {TerminalDemo} from './terminaldemo';
import { TerminalDemoRoutingModule } from './terminaldemo-routing.module';
import { TerminalModule, TabViewModule, CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		TerminalDemoRoutingModule,
        TerminalModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		TerminalDemo
	]
})
export class TerminalDemoModule {}
