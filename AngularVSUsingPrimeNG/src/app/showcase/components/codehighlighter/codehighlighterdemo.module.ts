import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodeHighlighterDemo} from './codehighlighterdemo';
import {CodeHighlighterDemoRoutingModule} from './codehighlighterdemo-routing.module';
import { CodeHighlighterModule } from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		CodeHighlighterDemoRoutingModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		CodeHighlighterDemo
	]
})
export class CodeHighlighterDemoModule {}
