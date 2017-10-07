import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeferDemo} from './deferdemo';
import {DeferDemoRoutingModule} from './deferdemo-routing.module';
import {DeferModule} from 'primeng/primeng';
import {DataTableModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {CodeHighlighterModule} from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		DeferDemoRoutingModule,
        DeferModule,
        GrowlModule,
        TabViewModule,
        DataTableModule,
        CodeHighlighterModule
	],
	declarations: [
		DeferDemo
	]
})
export class DeferDemoModule {}
