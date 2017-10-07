import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridDemo} from './griddemo';
import {GridDemoRoutingModule} from './griddemo-routing.module';
import {TabViewModule} from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		GridDemoRoutingModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		GridDemo
	]
})
export class GridDemoModule {}
