import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContextMenuDemo} from './contextmenudemo';
import {ContextMenuDemoRoutingModule} from './contextmenudemo-routing.module';
import {ContextMenuModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		ContextMenuDemoRoutingModule,
        ContextMenuModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ContextMenuDemo
	]
})
export class ContextMenuDemoModule {}
